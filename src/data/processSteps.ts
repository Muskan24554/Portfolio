import { Search, Calendar, PenTool, BarChart3 } from "lucide-react";
import { ReactNode } from "react";

export interface ProcessStep {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: "Search" | "Calendar" | "PenTool" | "BarChart3";
  insights: {
    title: string;
    content: string;
  }[];
  tools: string[];
  outcome: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    slug: "research-trends",
    title: "Research trends",
    description: "Analyzing current viral trends and audience interests to find the perfect angle.",
    iconName: "Search",
    insights: [
      {
        title: "Early Trend Detection",
        content: "I monitor platforms like TikTok Creative Center and Google Trends daily to catch rising sounds and formats before they peak. This 'early-mover' advantage often results in 3x higher reach."
      },
      {
        title: "Competitor Gap Analysis",
        content: "By studying what competitors are missing, I identify unique content opportunities that fill a void in the audience's feed."
      }
    ],
    tools: ["Google Trends", "TikTok Creative Center", "AnswerThePublic", "Pinterest Trends"],
    outcome: "A data-backed content strategy that aligns with current cultural moments."
  },
  {
    id: "02",
    slug: "plan-content",
    title: "Plan content",
    description: "Developing a strategic content calendar that ensures consistency and narrative flow.",
    iconName: "Calendar",
    insights: [
      {
        title: "The 3-Pillar Framework",
        content: "I categorize content into Educational, Inspirational, and Entertaining pillars. This ensures the feed remains balanced and provides consistent value to different audience segments."
      },
      {
        title: "Batching Efficiency",
        content: "Planning content in 2-week batches allows for better visual cohesion and reduces the daily stress of 'what to post'."
      }
    ],
    tools: ["Notion", "Trello", "Google Calendar", "Later"],
    outcome: "A cohesive, stress-free posting schedule that builds long-term brand authority."
  },
  {
    id: "03",
    slug: "design-write",
    title: "Design & write",
    description: "Crafting high-quality visuals and compelling captions that resonate with the audience.",
    iconName: "PenTool",
    insights: [
      {
        title: "Visual Hook Strategy",
        content: "The first 1.5 seconds are critical. I use high-contrast text overlays and dynamic movement to stop the scroll immediately."
      },
      {
        title: "The AIDA Copywriting Model",
        content: "Captions are structured to grab Attention, build Interest, create Desire, and prompt Action (CTA). This turns passive viewers into active community members."
      }
    ],
    tools: ["Canva", "Adobe Lightroom", "CapCut", "ChatGPT (for brainstorming)"],
    outcome: "Visually stunning content that not only looks good but converts followers into fans."
  },
  {
    id: "04",
    slug: "analyze-performance",
    title: "Analyze performance",
    description: "Reviewing metrics to understand what worked and how to optimize future content.",
    iconName: "BarChart3",
    insights: [
      {
        title: "Beyond Vanity Metrics",
        content: "While likes are great, I focus on Saves and Shares as they indicate true value and virality potential. These metrics drive the algorithm more than anything else."
      },
      {
        title: "Iterative Optimization",
        content: "Every month, I perform a 'Post-Mortem' on the top and bottom 3 posts to identify patterns and adjust the next month's strategy accordingly."
      }
    ],
    tools: ["Instagram Insights", "Iconosquare", "Google Sheets", "Meta Business Suite"],
    outcome: "A continuously evolving strategy that gets smarter and more effective over time."
  }
];
