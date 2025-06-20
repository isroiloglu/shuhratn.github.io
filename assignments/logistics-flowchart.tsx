"use client"

import { ArrowLeft, Download, DrumIcon as Drag, Network, Save, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LogisticsFlowchartSpec() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-4">
          <Link href="/learning-hub">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Learning Hub
            </Button>
          </Link>
          <div className="text-2xl font-bold text-gray-900">Assignment 2</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Web Development
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Logistics Flowchart Builder
            <span className="text-emerald-600 block text-2xl mt-2">Web Application</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Build an interactive web application to visualize and customize logistics flowcharts, clearly representing
            the company's logistics processes from suppliers to customers.
          </p>
        </div>
      </section>

      {/* Objective & Skills */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Your goal is to build an interactive web application to visualize and customize logistics flowcharts,
                clearly representing the company's logistics processes from suppliers to customers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-600" />
                Skills Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Visualizing logistics processes as node networks</li>
                <li>• Web application creation (HTML, CSS, JavaScript) with AI</li>
                <li>• Importance of prompt engineering</li>
                <li>• Understanding logistics components clearly and practically</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Drag className="w-5 h-5 text-purple-600" />
                  Interactive Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drag-and-drop nodes (Supplier, Warehouse, Distribution, Retail, Transport)</li>
                  <li>• Connect nodes dynamically with directional arrows</li>
                  <li>• Edit, label, and reposition nodes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Save className="w-5 h-5 text-amber-600" />
                  Export Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Save flowcharts for later editing</li>
                  <li>• Export as PNG image</li>
                  <li>• Export as PDF document</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">React (Optional)</Badge>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Libraries</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Mermaid.js</Badge>
                <Badge variant="outline">Flowchart.js</Badge>
                <Badge variant="outline">InteractJS</Badge>
                <Badge variant="outline">React Flow</Badge>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-4">AI & Hosting</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">ChatGPT</Badge>
                <Badge variant="outline">Claude.ai</Badge>
                <Badge variant="outline">GitHub</Badge>
                <Badge variant="outline">Deepseek</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Instructions</h2>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-emerald-600">1. Planning Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Review your previously created logistics flowchart</li>
                  <li>• Define which logistics components will be included as nodes</li>
                  <li>• Decide which libraries to use (Mermaid.js, Flowchart.js, etc.)</li>
                  <li>• Create and improve your prompt with AI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">2. Coding Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Generate a single HTML file containing HTML, CSS, JavaScript</li>
                  <li>• Iterate for improvement with AI assistance</li>
                  <li>• Troubleshoot problems using AI tools</li>
                  <li>• Understand your code by asking questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-600" />
                Submission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>LMS submission:</strong> Your website with a link to your web application
                </p>
                <p className="text-gray-700">
                  <strong>Note:</strong> Your web application does not have to be complete or fully functional
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Brief Report Required:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• List of issues and what you did to solve them</li>
                    <li>• Your honest opinion of the process and your end result</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="text-center">
          <Link href="/learning-hub">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Learning Hub
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
