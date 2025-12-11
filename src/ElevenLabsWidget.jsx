import React, { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

function loadScriptIfNotPresent(src) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const tag = document.createElement('script');
  tag.src = src;
  tag.async = true;
  tag.type = 'text/javascript';
  document.body.appendChild(tag);
}

function ElevenLabsWidget({ agentId = 'agent_9001kc7120ewewxtksd4ggm492q6', style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the widget script is present, or load it
    loadScriptIfNotPresent(SCRIPT_SRC);

    if (containerRef.current && !containerRef.current.querySelector('elevenlabs-convai')) {
      const el = document.createElement('elevenlabs-convai');
      el.setAttribute('agent-id', agentId);
      // Append the element; the widget script will upgrade and initialize it when ready
      containerRef.current.appendChild(el);
    }

    // Optional cleanup on unmount (if you prefer to remove the widget).
    // return () => { containerRef.current?.querySelector('elevenlabs-convai')?.remove(); };

  }, [agentId]);

  // Provide a default fixed-position style that can be overridden via `style` prop
  return (
    <div
      ref={containerRef}
      className="elevenlabs-widget-wrapper"
      style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 99999, ...style }}
    />
  );
}

export default ElevenLabsWidget;