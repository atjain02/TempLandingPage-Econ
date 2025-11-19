import { CheckCircle2, Clock, TrendingUp, Building2, Users, DollarSign } from "lucide-react";

export const Stats = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Impact for
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Real Estate Companies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from developers using Brix for investment decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">42+ Buildings</h3>
            <p className="text-muted-foreground">
              Weekly lease data collection across metro areas
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">3 Companies</h3>
            <p className="text-muted-foreground">
              Real estate development firms actively using Brix
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Real Impact</h3>
            <p className="text-muted-foreground">
              Investment decisions guided by our data analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
