import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] w-full flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          It seems you have wandered off the sacred path. The page you are looking for does not exist.
        </p>
        <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  );
}
