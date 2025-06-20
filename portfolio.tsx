import { GraduationCap, Briefcase, Heart, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Shuhrat</div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Welcome to My Projects
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Digital
            <span className="text-emerald-600 block">Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Explore my work in web development, student learning platforms, and personal portfolio showcasing my journey
            in technology.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* IBM Student Learning Hub */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                <GraduationCap className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">IBM Student Learning Hub</CardTitle>
              <CardDescription className="text-base text-gray-600 leading-relaxed">
                A comprehensive learning platform designed for students to access IBM courses, track progress, and
                engage with interactive content. Built with modern web technologies and responsive design.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  MongoDB
                </Badge>
              </div>
              <Link href="/learning-hub">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                  Explore Hub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* My Portfolio */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Briefcase className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">My Portfolio</CardTitle>
              <CardDescription className="text-base text-gray-600 leading-relaxed">
                A modern, responsive portfolio website showcasing my skills, projects, experience, and personal
                interests. Features smooth animations and clean, professional design.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Tailwind
                </Badge>
              </div>
              <Button
                variant="outline"
                className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium"
              >
                View Portfolio
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">2+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600 font-medium">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Shuhrat</span>
          </div>

          {/* Project Icons */}
          <div className="flex justify-center gap-4 pt-4">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-amber-600" />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          <p className="text-sm text-gray-500 pt-4">© 2024 Shuhrat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
