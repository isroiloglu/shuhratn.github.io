"use client"

import { ArrowLeft, BarChart3, Calculator, Database, TrendingUp, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LeadTimeAnalysisSpec() {
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
          <div className="text-2xl font-bold text-gray-900">Assignment 3</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Data Analysis
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lead Time Variability Analysis
            <span className="text-emerald-600 block text-2xl mt-2">Bullwhip Effect in Procurement</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Analyze historical procurement data to identify patterns, causes, and sources of lead-time variability using
            analytical techniques and visualization tools.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                You have received historical procurement data containing orders placed with multiple suppliers. Your
                goal is to identify patterns, causes, and sources of lead-time variability using analytical techniques
                and tools provided.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Definitions */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Definitions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Lead Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The duration between placing an order and receiving the goods.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Lead Time Variability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The unpredictable fluctuations in supplier delivery times. Deviation from the expected (average) lead
                  time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                  Bullwhip Effect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The phenomenon where small fluctuations in consumer demand amplify as they move upstream in the supply
                  chain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dataset Structure */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Dataset Structure</h2>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-gray-600" />
                Data Columns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="outline">Order_ID</Badge>
                  <Badge variant="outline">Supplier</Badge>
                  <Badge variant="outline">Order_Date</Badge>
                  <Badge variant="outline">Expected_Delivery_Date</Badge>
                  <Badge variant="outline">Actual_Delivery_Date</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Product_Category</Badge>
                  <Badge variant="outline">Transportation_Mode</Badge>
                  <Badge variant="outline">Supplier_Location</Badge>
                  <Badge variant="outline">Disruption_Type</Badge>
                  <Badge variant="outline">Customer_Demand</Badge>
                  <Badge variant="outline">Order_Quantity</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Analysis Questions */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Analysis Questions</h2>

          <div className="space-y-8">
            {/* Simple Questions */}
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Simple Questions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">• Which supplier has the highest average lead time?</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">• What transportation mode has the lowest average lead time?</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">• Which month shows the highest average delays in delivery?</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">• What type of disruption leads to the longest average delay?</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Complex Questions */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Complex Questions</h3>
              <div className="space-y-4">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">
                      • Which mode of transportation contributes most significantly to delays?
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">• Are there seasonal patterns affecting lead times?</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="text-gray-700">
                      • Compare monthly customer demand vs. order quantities. Do you observe amplified variability
                      (Bullwhip Effect)?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Options */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverable Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-emerald-700">Option 1: Web-based Analysis Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Create a web-based tool using HTML and JavaScript that can:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Upload CSV datasets</li>
                  <li>• Answer the set of simple questions</li>
                  <li>• Produce appropriate visualizations</li>
                  <li>• Display analytical results</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Option 2: Spreadsheet Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Use Excel to create comprehensive analysis with:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Formulas and pivot tables</li>
                  <li>• Answer simple questions</li>
                  <li>• Include visualizations (charts, graphs)</li>
                  <li>• Statistical analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
