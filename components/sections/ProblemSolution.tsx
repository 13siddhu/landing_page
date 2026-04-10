import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
  ignoreMobileResize: true,
});

import {
  X,
  Clock,
  TrendingDown,
  CheckCircle,
  MessageCircle,
  Target,
  ArrowRight,
} from "lucide-react";

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".section-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".problem-card", {
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      gsap.from(".solution-card", {
        opacity: 0,
        x: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      gsap.from(".solution-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-900 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE - Problem */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <div className="inline-block px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wide">
                  The Problem
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-bold text-white leading-tight">
                Why 98% of Your High-Intent Traffic Never Hits Your CRM
              </h2>
            </div>

            <div className="space-y-3">
              {/* Pain Point 1 */}
              <div className="problem-card bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Digital Decay
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Total disengagement within 6.4 seconds of landing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="problem-card bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Qualification Bottlenecks
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Manual filtering decelerates your pipeline growth
                      velocity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="problem-card bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Revenue Leakage
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      High-value enterprise opportunities vanish due to
                      operational friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem visual indicator */}
            <div className="flex items-center gap-3 text-red-400">
              <div className="h-1 w-12 bg-red-500/50 rounded"></div>
              <span className="text-sm font-medium">Sound familiar?</span>
            </div>
          </div>

          {/* RIGHT SIDE - Solution */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <div className="inline-block px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-[11px] font-semibold text-green-400 uppercase tracking-wide">
                  The Solution
                </span>
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-bold text-white leading-tight">
                Nova: The Autonomous Layer for Your Growth Stack
              </h2>
            </div>

            <div className="space-y-3">
              {/* Solution 1 */}
              <div className="solution-card bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Predictive Engagement
                    </h3>
                    <p className="text-slate-300 text-sm mt-0.5">
                      Anticipate and neutralize friction points before they
                      emerge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="solution-card bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Neural Intent Scoring
                    </h3>
                    <p className="text-slate-300 text-sm mt-0.5">
                      Deep-learning models that isolate and prioritize your
                      dream customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="solution-card bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Autonomous Pipeline Sync
                    </h3>
                    <p className="text-slate-300 text-sm mt-0.5">
                      Real-time orchestration across your entire revenue
                      ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="solution-cta">
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                See the Engine in Action
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
