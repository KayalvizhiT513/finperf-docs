import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Activity, Target, BarChart3, TrendingDown } from "lucide-react";

const Introduction = () => {
  const metrics = [
    {
      name: "Standard Deviation",
      description: "Measures portfolio volatility over a period.",
      icon: Activity,
      path: "/std-dev",
      available: true,
    },
    {
      name: "Sharpe Ratio",
      description: "Calculates risk-adjusted return using excess return over volatility.",
      icon: TrendingUp,
      path: "/sharpe-ratio",
      available: false,
    },
    {
      name: "Beta",
      description: "Measures portfolio sensitivity to benchmark market movements.",
      icon: Target,
      path: "/beta",
      available: false,
    },
    {
      name: "Information Ratio",
      description: "Compares portfolio active return against benchmark volatility.",
      icon: BarChart3,
      path: "/information-ratio",
      available: false,
    },
    {
      name: "Sortino Ratio",
      description: "Similar to Sharpe but penalizes only downside volatility.",
      icon: TrendingDown,
      path: "/sortino-ratio",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary">FinMetrics</div>
            <Badge variant="secondary" className="text-xs">API v1</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 docs-heading">
            Analytics API Suite
          </h1>
          <p className="text-xl text-docs-text max-w-3xl">
            This section provides documentation for all analytics APIs available in the platform. 
            Each API computes a specific Investment Performance Analytics used for portfolio performance and risk evaluation. 
            Select a metric below to explore its input parameters, computation rules, and examples.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return metric.available ? (
              <Link key={metric.name} to={metric.path} className="block transition-all hover:scale-[1.02]">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-xl">{metric.name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {metric.description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-docs-link font-medium">
                      View documentation →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div key={metric.name} className="block opacity-60">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-xl">{metric.name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {metric.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="flex-shrink-0 ml-2">Coming soon</Badge>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border">
          <div className="text-center text-docs-text">
            <p>Need help? Contact us at <a href="mailto:support@finmetrics.io" className="text-docs-link hover:underline">support@finmetrics.io</a></p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Introduction;
