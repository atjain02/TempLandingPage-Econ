import { cn } from "@/lib/utils";
import {
  Calculator,
  CheckCircle2,
  FileText,
  MapPin,
  MessageSquare,
  Pen,
  School,
  Database,
  TrendingUp,
  Bot,
} from "lucide-react";

const features = [
  {
    id: "ai-web-scraping",
    icon: Bot,
    title: "AI Web Scraping Engine",
    description:
      "AI-powered web scraping to traverse websites and pull weekly lease data from 42+ apartment buildings. Automatically extracts pricing, availability, and market trends from multiple sources.",
    benefits: [
      "Automated weekly data collection from 42+ buildings",
      "Real-time pricing and availability updates",
      "Eliminates manual web searches and inconsistent spreadsheets",
      "Comprehensive market coverage across metro areas",
    ],
    gradient: "from-blue-500/10 to-blue-600/10",
    image: "photo-1670261197418-40e922b570d2",
  },
  {
    id: "market-trend-analysis",
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description:
      "AI-powered analysis reveals seasonal patterns, location-based appreciation rates, and investment opportunities. Identified recurring market patterns and stadium area growth opportunities.",
    benefits: [
      "Seasonal trend identification and market patterns",
      "Location-based appreciation tracking (Stadium area 2x growth)",
      "Transit project impact analysis for major events",
      "Data-driven investment recommendations",
    ],
    gradient: "from-green-500/10 to-green-600/10",
    image: "photo-1670261197418-40e922b570d2",
  },
  {
    id: "pricing-intelligence",
    icon: Database,
    title: "Pricing Intelligence Platform",
    description:
      "Transform inconsistent 'lease-comp' spreadsheets into actionable intelligence. Help developers avoid risky investments while identifying high-growth opportunities near transit projects.",
    benefits: [
      "Replace manual lease-comp spreadsheets",
      "Guide important investment decisions",
      "Risk assessment for development locations",
      "Transit project impact forecasting",
    ],
    gradient: "from-purple-500/10 to-purple-600/10",
    image: "photo-1722082839841-45473f5a15cf",
  },
  {
    id: "document-processing",
    icon: FileText,
    title: "LLM Document Processing",
    description:
      "Latest feature uses Large Language Models to level prices from contractor bids, normalizing cost structures and identifying pricing anomalies across different vendors.",
    benefits: [
      "Automated contractor bid analysis",
      "Price normalization across vendors",
      "Anomaly detection in pricing structures",
      "Streamlined vendor comparison process",
    ],
    gradient: "from-orange-500/10 to-orange-600/10",
    image: "photo-1521791055366-0d553872125f",
  },
  {
    id: "real-estate-analytics",
    icon: Calculator,
    title: "Real Estate Analytics",
    description:
      "Comprehensive analytics suite that helped development companies make informed decisions, doubling down on stadium area investments while avoiding overvalued markets.",
    benefits: [
      "Used by 3 real estate development companies",
      "Growing adoption by development firms",
      "Proven ROI for investment decisions",
      "Custom analytics for development portfolios",
    ],
    gradient: "from-red-500/10 to-red-600/10",
    image: "photo-1542621334-a254cf47733d",
  },
];

const processLabels = ["Scrape", "Analyze", "Intelligence", "Process", "Analytics"];

const industryLabels = [
  "Web Scraping",
  "Trend Analysis",
  "Pricing Intelligence",
  "Document Processing",
  "Real Estate Analytics",
];

export const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <section
          key={index}
          id={feature.id}
          className={`py-24 scroll-mt-16 ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <feature.icon className="w-4 h-4" />
                  {processLabels[index]}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {feature.title}
                </h2>

                <p className="text-xl text-muted-foreground mb-8">
                  {feature.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* <Button size="lg" className="text-lg px-8 py-6 group">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  {/* Background decoration */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl transform rotate-3 scale-105`}
                  ></div>

                  {/* Main image container */}
                  <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border">
                    <img
                      src={
                        index === 0
                          ? `payapps.png`
                          : `https://images.unsplash.com/${feature.image}?auto=format&fit=crop&w=800&h=600&q=80`
                      }
                      alt={feature.title}
                      className={cn("w-full h-80 object-cover", {
                        "object-top": index === 0,
                      })}
                    />

                    {/* Overlay with icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20">
                            <feature.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              AI-Powered Solution
                            </p>
                          </div>
                        </div>

                        {/* Progress indicators */}
                        <div className="flex gap-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-1 bg-primary/20 rounded-full flex-1"
                            >
                              <div
                                className="h-full bg-primary rounded-full transition-all duration-1000"
                                style={{ width: i <= index ? "100%" : "0%" }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
