"use client"

import { ArrowLeft, ExternalLink, FileText, Calculator, Gamepad2, BarChart3, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const assignments = [
  {
    id: 1,
    title: "Assignment 1: Logistics Process Flow",
    description:
      "Comprehensive logistics flowchart documenting the complete supply chain process from order placement to customer delivery",
    url: "https://docs.google.com/document/d/1vP2tSEOzHBMtFuTfVZ-hbWfNkyfZW3DXdXYlLeo3rFA/edit?usp=sharing",
    type: "Google Docs",
    icon: BarChart3,
    category: "Operations Research",
    status: "available",
  },
  {
    id: 2,
    title: "Logistics Flowchart Builder",
    description:
      "Interactive drag-and-drop logistics flowchart builder with real-time connections and export functionality",
    url: "/assignments/logistics-flowchart-app",
    type: "Web App",
    icon: BarChart3,
    category: "Web Development",
    status: "specification",
  },
  {
    id: 3,
    title: "Lead Time Variability Analysis",
    description:
      "Complete data analysis tool for procurement lead times with CSV upload, automated analysis, and results export",
    url: "/assignments/lead-time-webapp",
    type: "Data Analysis",
    icon: Calculator,
    category: "Operations Research",
    status: "specification",
  },
  {
    id: 4,
    title: "Problem Research and Design Activity",
    description: "Comprehensive analysis of design problems and solution methodologies",
    url: "https://shuhrat2001.github.io/shuhrat.github.io/assignments4.html",
    type: "HTML",
    icon: FileText,
    category: "Design Research",
  },
  {
    id: 5,
    title: "Design Thinking Activity",
    description: "Structured approach to creative problem-solving and user-centered design",
    url: "https://docs.google.com/document/d/1_T6hnPXIZrfxmZVKcYcWwzBfzcSE_k8Sx32pVKuQnKE/edit?usp=sharing",
    type: "Google Docs",
    icon: FileText,
    category: "Design Research",
  },
  {
    id: 6,
    title: "TSP Game: The Route Challenge",
    description: "Interactive traveling salesman problem solver with gamification elements",
    url: "https://ali747711.github.io/TSP/",
    type: "Game",
    icon: Gamepad2,
    category: "Algorithms",
  },
  {
    id: 7,
    title: "ABC Classification",
    description: "Inventory management classification system using ABC analysis methodology",
    url: "https://docs.google.com/spreadsheets/d/1yJuc3ltH4JuUPY5z5fFCYZQc_2GUI3VjtsJwZhfBgew/edit?usp=sharing",
    type: "Google Sheets",
    icon: BarChart3,
    category: "Operations Research",
  },
  {
    id: 8,
    title: "Generalizing Slotting Strategy",
    description: "Strategic framework for optimizing warehouse slotting and inventory placement",
    url: "https://docs.google.com/document/d/1xs2g1FPWb1y2ocXYjo52iSa-Z377vJVvAntTzv28pGo/edit?usp=sharing",
    type: "Google Docs",
    icon: Database,
    category: "Operations Research",
  },
  {
    id: 9,
    title: "ABC Slotting Strategy Tool",
    description: "Interactive tool for implementing ABC slotting strategies in warehouse management",
    url: "https://shuhrat2001.github.io/shuhrat.github.io/assignments6.html",
    type: "HTML",
    icon: Calculator,
    category: "Operations Research",
  },
  {
    id: 10,
    title: "Counterfeit Supplements",
    description: "Data analysis and research on counterfeit supplement detection and prevention",
    url: "https://docs.google.com/spreadsheets/d/1LrSZcyXe1GvQ7Pj9nbC6KZlGkwinSbuAXbHt8Tjrk80/edit?usp=sharing",
    type: "Google Sheets",
    icon: Shield,
    category: "Data Analysis",
  },
]

const categories = [
  "All",
  "Web Development",
  "Design Research",
  "Algorithms",
  "Operations Research",
  "Data Analysis",
  "Research",
]

export default function LearningHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="text-2xl font-bold text-gray-900">IBM Student Learning Hub</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Hub
            <span className="text-emerald-600 block">Assignments & Projects</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A comprehensive collection of assignments, projects, and research activities covering web development,
            design thinking, operations research, and data analysis.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">10</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">5</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">4</div>
              <div className="text-sm text-gray-600">Web Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">6</div>
              <div className="text-sm text-gray-600">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignments Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => {
              const IconComponent = assignment.icon
              return (
                <Card
                  key={assignment.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {assignment.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {assignment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {assignment.type}
                      </Badge>
                      <Button
                        size="sm"
                        className={`${
                          assignment.status === "unavailable"
                            ? "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
                            : assignment.status === "specification"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-emerald-600 hover:bg-emerald-700"
                        } text-white`}
                        onClick={() => {
                          if (assignment.status === "unavailable") return
                          if (assignment.url.startsWith("/")) {
                            window.location.href = assignment.url
                          } else {
                            window.open(assignment.url, "_blank")
                          }
                        }}
                        disabled={assignment.status === "unavailable"}
                      >
                        {assignment.status === "unavailable"
                          ? "Unavailable"
                          : assignment.status === "specification"
                            ? "View App"
                            : "View Document"}
                        {assignment.status !== "unavailable" && <ExternalLink className="w-3 h-3 ml-1" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const categoryCount = assignments.filter((a) => a.category === category).length
              return (
                <Card key={category} className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-2xl font-bold text-emerald-600 mb-1">{categoryCount}</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="text-center">
          <p className="text-gray-600 mb-4">All projects are part of the IBM Student Learning Hub curriculum</p>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Portfolio
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
