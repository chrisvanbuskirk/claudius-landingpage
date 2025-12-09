import { Sparkles, Download, Github, Apple, Monitor, Cpu, Bell, Search, Calendar, Zap, ExternalLink } from 'lucide-react';

const GITHUB_REPO = 'https://github.com/chrisvanbuskirk/claudius';
const RELEASE_URL = 'https://github.com/chrisvanbuskirk/claudius/releases/latest';
const MAC_DMG_URL = 'https://github.com/chrisvanbuskirk/claudius/releases/latest/download/Claudius_0.2.1_universal.dmg';
const WINDOWS_URL = 'https://github.com/chrisvanbuskirk/claudius/releases/latest/download/Claudius_0.2.1_x64-setup.exe';
const LINUX_URL = 'https://github.com/chrisvanbuskirk/claudius/releases/latest/download/Claudius_0.2.1_amd64.AppImage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-animated pointer-events-none" />

      {/* Decorative orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center glow-blue">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Claudius</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="#download" className="btn-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Claude AI</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Your Personal</span>
            <br />
            <span className="gradient-text">AI Research Assistant</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get personalized daily briefings on topics you care about.
            Claudius uses Claude to research the web and deliver
            digestible insights right to your desktop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#download" className="btn-primary flex items-center gap-2 text-lg">
              <Download className="w-5 h-5" />
              Download for Free
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="relative z-10 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-2 glow-purple">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="/screenshots/home.png"
                alt="Claudius App - Daily briefings view showing personalized research cards"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay informed without the noise. Claudius filters the web and delivers
              what matters to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Search className="w-6 h-6" />}
              title="Real-Time Web Search"
              description="Claude searches the web using built-in tools to find the latest information on your topics."
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Scheduled Briefings"
              description="Set your preferred time and get fresh research delivered automatically every day."
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Desktop Notifications"
              description="Get notified when new briefings are ready, so you never miss important updates."
            />
            <FeatureCard
              icon={<Cpu className="w-6 h-6" />}
              title="MCP Integration"
              description="Connect to external tools via MCP servers for enhanced research capabilities."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Fully Native"
              description="Built with Tauri for a fast, lightweight experience. No browser required."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Personalized Topics"
              description="Configure exactly what you want to learn about. Add, edit, or disable topics anytime."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="space-y-8">
            <Step
              number="1"
              title="Add Your Topics"
              description="Tell Claudius what you want to learn about. AI, tech news, finance, science - anything goes."
            />
            <Step
              number="2"
              title="Set Your Schedule"
              description="Choose when you want your daily briefings. Morning coffee companion or evening catch-up."
            />
            <Step
              number="3"
              title="Get Smart Briefings"
              description="Claude researches the web, synthesizes findings, and presents digestible briefing cards."
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Download Claudius
          </h2>
          <p className="text-gray-400 mb-10">
            Free and open source. Available for macOS, Windows, and Linux.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <DownloadButton
              href={MAC_DMG_URL}
              icon={<Apple className="w-6 h-6" />}
              platform="macOS"
              subtitle="Universal (Intel + Apple Silicon)"
            />
            <DownloadButton
              href={WINDOWS_URL}
              icon={<Monitor className="w-6 h-6" />}
              platform="Windows"
              subtitle="64-bit Installer"
            />
            <DownloadButton
              href={LINUX_URL}
              icon={<Cpu className="w-6 h-6" />}
              platform="Linux"
              subtitle="AppImage"
            />
          </div>

          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
          >
            <span>View all releases</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative z-10 py-12 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">*</span>
                <span><strong>Anthropic API Key</strong> - You'll need your own API key from <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">console.anthropic.com</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">*</span>
                <span>macOS 11+, Windows 10+, or Linux with GTK3</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-400">Claudius v0.2.1</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`${GITHUB_REPO}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Releases
            </a>
            <a
              href={`${GITHUB_REPO}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Issues
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300">
      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg glow-purple">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function DownloadButton({ href, icon, platform, subtitle }: { href: string; icon: React.ReactNode; platform: string; subtitle: string }) {
  return (
    <a
      href={href}
      className="glass-card glass-card-hover rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-300"
    >
      <div className="text-primary-400">{icon}</div>
      <div className="text-white font-semibold">{platform}</div>
      <div className="text-gray-500 text-xs">{subtitle}</div>
    </a>
  );
}

export default App;
