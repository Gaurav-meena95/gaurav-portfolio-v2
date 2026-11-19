import { useState, useEffect } from 'react';
import { Container, ArrowIcon } from './SiteUI';

export function Footer({ onOpenCard }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-portfolio-border/70 py-10 mt-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-[12px] text-portfolio-muted">
          <div className="space-y-1">
            <p className="text-portfolio-text font-sans font-medium text-[13px]">
              gaurav meena
            </p>
            <p className="text-[11px]">
              b.tech ai · newton school of technology (rishihood university)
            </p>
            <p className="text-[11px] text-portfolio-muted/70">
              india (ist): {time || '10:00:00 AM'}
            </p>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-auto">
            {onOpenCard && (
              <button
                onClick={onOpenCard}
                className="inline-flex items-center gap-1 text-portfolio-muted transition-colors hover:text-portfolio-text cursor-pointer"
                title="Return to the 3D card landing stage"
              >
                <span>◂ 3D card stage</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 transition-colors hover:text-portfolio-text cursor-pointer"
            >
              back to top <ArrowIcon className="h-3 w-3 -rotate-45" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
