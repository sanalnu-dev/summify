import { Video, Zap, Clock, Shield } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";


export default function Page1() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="size-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">Summify</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Never Miss a Meeting Detail Again
              </h1>
              <p className="text-xl text-gray-600">
                Summify automatically summarizes your meetings, extracts key points, 
                and generates actionable insights in seconds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-300"
                onClick={() => navigate("/page2")}
              >
                Continue
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Zap className="size-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Summaries</h3>
                  <p className="text-sm text-gray-600">Get results in seconds</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="size-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Save Time</h3>
                  <p className="text-sm text-gray-600">Focus on what matters</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Video className="size-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Works with Transcripts</h3>
                  <p className="text-sm text-gray-600">Upload text files easily</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Shield className="size-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Works with Audio Files</h3>
                  <p className="text-sm text-gray-600">Support for MP3, WAV & more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-600 rounded-2xl transform rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzA1OTAwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team meeting collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}