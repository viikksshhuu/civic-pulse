'use client';

import { useEffect, useRef } from 'react';
import type { Issue, IssueStatus } from '@/lib/mock-data';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  issues: Issue[];
  onSelectIssue: (issue: Issue) => void;
}

const pinColors: Record<IssueStatus, string> = {
  open: '#F59E0B',
  acknowledged: '#3B82F6',
  in_progress: '#3B82F6',
  resolved: '#10B981',
  rejected: '#EF4444',
};

export default function MapView({ issues, onSelectIssue }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);
  const markersRef = useRef<import('leaflet').CircleMarker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let L: typeof import('leaflet');

    async function initMap() {
      L = (await import('leaflet')).default;

      // Fix default icon
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current!, {
        center: [12.9716, 77.5946],
        zoom: 13,
        zoomControl: true,
      });

      // Dark tile layer (CartoDB Dark Matter)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = map;

      // Add markers
      addMarkers(L, map, issues, onSelectIssue);
    }

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // eslint-disable-line

  // Update markers when issues change
  useEffect(() => {
    async function updateMarkers() {
      if (!mapRef.current) return;
      const L = (await import('leaflet')).default;

      // Clear old markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      addMarkers(L, mapRef.current, issues, onSelectIssue);
    }
    updateMarkers();
  }, [issues]); // eslint-disable-line

  function addMarkers(
    L: typeof import('leaflet'),
    map: import('leaflet').Map,
    issueList: Issue[],
    onSelect: (i: Issue) => void
  ) {
    issueList.forEach((issue) => {
      const color = pinColors[issue.status] || '#F59E0B';
      const size = issue.severity === 'emergency' ? 16 : issue.upvotes > 50 ? 14 : 10;

      const marker = L.circleMarker([issue.lat, issue.lng], {
        radius: size,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      })
        .addTo(map)
        .on('click', () => onSelect(issue));

      // Tooltip
      marker.bindTooltip(
        `<div style="font-family:system-ui;font-size:12px;font-weight:600;padding:2px 6px;color:#111827">${issue.categoryIcon} ${issue.title.slice(0, 40)}...</div>`,
        { permanent: false, direction: 'top', offset: [0, -10] }
      );

      markersRef.current.push(marker);
    });
  }

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
      id="leaflet-map"
    />
  );
}
