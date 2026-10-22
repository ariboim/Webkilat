import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';

interface KumpulBloggerAdsProps {
  className?: string;
  variant?: 'header' | 'content';
}

export const KumpulBloggerAds: React.FC<KumpulBloggerAdsProps> = ({
  className = '',
  variant = 'header',
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(135);

  useEffect(() => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // Isolate document.write inside sandboxed iframe so it executes synchronously without breaking the React SPA
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 6px;
      background: #ffffff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      overflow-x: hidden;
    }
    .landscape-ads-container {
      margin: 0 !important;
      width: 100% !important;
    }
    .landscape-ads-item {
      display: flex !important;
      border: 1px solid #e2e8f0 !important;
      border-radius: 12px !important;
      padding: 12px !important;
      background: #ffffff !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06) !important;
      align-items: center !important;
      gap: 12px !important;
    }
    .landscape-ads-item div {
      flex: 1 !important;
    }
    .landscape-ads-item div strong {
      color: #0284c7 !important;
      font-size: 14px !important;
    }
    .landscape-ads-item div p {
      margin: 4px 0 !important;
      font-size: 12px !important;
      color: #334155 !important;
      line-height: 1.4 !important;
    }
    .landscape-ads-item div small {
      font-size: 10px !important;
      color: #94a3b8 !important;
    }
    .landscape-ads-item img {
      max-height: 65px !important;
      width: auto !important;
      border-radius: 8px !important;
      object-fit: cover !important;
    }
    .kb-ads-branding {
      text-align: right !important;
      font-size: 9px !important;
      margin-top: 4px !important;
      color: #94a3b8 !important;
    }
    .kb-ads-branding a {
      color: #64748b !important;
      text-decoration: none !important;
    }
    @media (max-width: 600px) {
      .landscape-ads-item {
        flex-direction: column !important;
        align-items: flex-start !important;
        text-align: left !important;
      }
      .landscape-ads-item img {
        width: 100% !important;
        max-height: 80px !important;
      }
    }
  </style>
</head>
<body>
  <script type='text/javascript' src='https://Kumpulblogger.com/show_ads_native_landscape.js.php?pubId=154&pubProvName=Kumpulblogger.com&maxads=10&column=1'></script>
  <script>
    function updateHeight() {
      try {
        var h = document.body.scrollHeight || document.documentElement.scrollHeight;
        if (h && window.parent) {
          window.parent.postMessage({ type: 'kb-ads-height', height: h }, '*');
        }
      } catch (e) {}
    }
    window.addEventListener('load', updateHeight);
    setTimeout(updateHeight, 1000);
    setTimeout(updateHeight, 2500);
  </script>
</body>
</html>`;

    doc.open();
    doc.write(html);
    doc.close();

    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'kb-ads-height' && typeof e.data.height === 'number') {
        setIframeHeight(Math.max(120, Math.min(300, e.data.height + 10)));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div
      className={`w-full ${
        variant === 'header'
          ? 'bg-slate-50/80 border-b border-slate-200/80 py-2'
          : 'my-6 p-3 bg-slate-50/60 rounded-2xl border border-slate-200'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
          <span className="flex items-center gap-1 text-slate-500">
            <Tag className="w-3 h-3 text-sky-600" />
            <span>Iklan Baris Pilihan</span>
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <span>KumpulBlogger Network</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>

        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <iframe
            ref={iframeRef}
            title="Iklan Baris KumpulBlogger"
            style={{ height: `${iframeHeight}px` }}
            className="w-full border-0 block transition-all duration-300"
            sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
