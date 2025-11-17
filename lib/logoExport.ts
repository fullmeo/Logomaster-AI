/**
 * Logo Export Utilities
 * Handles exporting logos in various formats (PNG, SVG, PDF)
 */

export interface LogoExportData {
  companyName: string;
  style: string;
  colors: string[];
  shape: string;
  size: string;
  font?: string;
}

/**
 * Export logo as PNG using Canvas API
 */
export async function exportAsPNG(
  logoData: LogoExportData,
  resolution: 'standard' | 'high' | 'ultra' = 'standard'
): Promise<void> {
  const sizes = {
    standard: 512,
    high: 1024,
    ultra: 2048,
  };

  const size = sizes[resolution];
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  const colorStart = getTailwindColor(logoData.colors[0] || 'from-blue-500');
  const colorEnd = getTailwindColor(logoData.colors[1] || 'to-cyan-500');
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  // Draw shape based on logo shape
  ctx.fillStyle = gradient;
  drawShape(ctx, logoData.shape, size);

  // Draw company initial
  const fontSize = size * 0.4;
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px ${logoData.font || 'Arial'}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(logoData.companyName.charAt(0).toUpperCase(), size / 2, size / 2);

  // Convert canvas to blob and download
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${sanitizeFilename(logoData.companyName)}-logo-${resolution}.png`;
    link.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

/**
 * Export logo as SVG
 */
export function exportAsSVG(logoData: LogoExportData, size: number = 512): void {
  const colorStart = getTailwindColor(logoData.colors[0] || 'from-blue-500');
  const colorEnd = getTailwindColor(logoData.colors[1] || 'to-cyan-500');

  let shapePath = '';
  const shapeSize = size;

  // Define shape paths
  switch (logoData.shape) {
    case 'circle':
      shapePath = `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" />`;
      break;
    case 'rounded':
      const radius = size * 0.15;
      shapePath = `<rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" />`;
      break;
    case 'hexagon':
      const points = getHexagonPoints(size / 2, size / 2, size / 2);
      shapePath = `<polygon points="${points}" />`;
      break;
    case 'square':
    default:
      shapePath = `<rect x="0" y="0" width="${size}" height="${size}" />`;
      break;
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colorStart};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colorEnd};stop-opacity:1" />
    </linearGradient>
  </defs>
  <g fill="url(#logoGradient)">
    ${shapePath}
  </g>
  <text
    x="${size / 2}"
    y="${size / 2}"
    font-family="${logoData.font || 'Arial'}"
    font-size="${size * 0.4}"
    font-weight="bold"
    fill="white"
    text-anchor="middle"
    dominant-baseline="central"
  >
    ${logoData.companyName.charAt(0).toUpperCase()}
  </text>
</svg>`;

  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${sanitizeFilename(logoData.companyName)}-logo.svg`;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Export logo as PDF (wrapper for future implementation)
 */
export async function exportAsPDF(logoData: LogoExportData): Promise<void> {
  // For now, export as high-res PNG
  // In production, use libraries like jsPDF or PDFKit
  alert('Export PDF: Utilisez l\'export PNG haute résolution pour l\'impression. L\'export PDF direct sera bientôt disponible.');
  await exportAsPNG(logoData, 'ultra');
}

/**
 * Helper: Draw shape on canvas
 */
function drawShape(ctx: CanvasRenderingContext2D, shape: string, size: number): void {
  ctx.beginPath();

  switch (shape) {
    case 'circle':
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      break;

    case 'rounded':
      const radius = size * 0.15;
      ctx.roundRect(0, 0, size, size, radius);
      break;

    case 'hexagon':
      const centerX = size / 2;
      const centerY = size / 2;
      const hexRadius = size / 2;
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = centerX + hexRadius * Math.cos(angle);
        const y = centerY + hexRadius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      break;

    case 'square':
    default:
      ctx.rect(0, 0, size, size);
      break;
  }

  ctx.fill();
}

/**
 * Helper: Get hexagon points for SVG
 */
function getHexagonPoints(cx: number, cy: number, radius: number): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}

/**
 * Helper: Convert Tailwind color class to hex
 */
function getTailwindColor(colorClass: string): string {
  const colorMap: Record<string, string> = {
    // Blue shades
    'from-blue-500': '#3B82F6',
    'from-blue-600': '#2563EB',
    'to-cyan-500': '#06B6D4',
    'to-cyan-600': '#0891B2',

    // Gray shades
    'from-gray-700': '#374151',
    'from-gray-800': '#1F2937',
    'from-gray-900': '#111827',
    'to-gray-800': '#1F2937',
    'to-gray-900': '#111827',

    // Amber/Orange shades
    'from-amber-500': '#F59E0B',
    'from-amber-600': '#D97706',
    'to-orange-500': '#F97316',
    'to-orange-600': '#EA580C',

    // Pink/Purple shades
    'from-pink-500': '#EC4899',
    'from-pink-600': '#DB2777',
    'to-purple-500': '#A855F7',
    'to-purple-600': '#9333EA',

    // Indigo shades
    'from-indigo-500': '#6366F1',
    'from-indigo-600': '#4F46E5',

    // Red shades
    'from-red-500': '#EF4444',
    'from-red-600': '#DC2626',
  };

  return colorMap[colorClass] || '#3B82F6'; // Default to blue
}

/**
 * Helper: Sanitize filename
 */
function sanitizeFilename(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Get file size limits based on user tier
 */
export function getExportLimits(tier: string): {
  maxResolution: 'standard' | 'high' | 'ultra';
  formats: string[];
} {
  switch (tier) {
    case 'business':
      return {
        maxResolution: 'ultra',
        formats: ['PNG', 'SVG', 'PDF'],
      };
    case 'pro':
      return {
        maxResolution: 'high',
        formats: ['PNG', 'SVG'],
      };
    case 'free':
    default:
      return {
        maxResolution: 'standard',
        formats: ['PNG'],
      };
  }
}
