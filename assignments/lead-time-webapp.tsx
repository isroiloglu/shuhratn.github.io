"use client"

import type React from "react"
import { useState, useRef } from "react"
import { ArrowLeft, Upload, BarChart3, Download, FileText, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface ProcurementData {
  Order_ID: string
  Supplier: string
  Order_Date: string
  Expected_Delivery_Date: string
  Actual_Delivery_Date: string
  Product_Category: string
  Transportation_Mode: string
  Supplier_Location: string
  Disruption_Type: string
  Customer_Demand: number
  Order_Quantity: number
}

interface AnalysisResult {
  question: string
  answer: string
  value: number | string
}

export default function LeadTimeWebApp() {
  const [data, setData] = useState<ProcurementData[]>([])
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Sample data for demonstration
  const sampleData: ProcurementData[] = [
    {
      Order_ID: "ORD001",
      Supplier: "Supplier A",
      Order_Date: "2024-01-15",
      Expected_Delivery_Date: "2024-01-25",
      Actual_Delivery_Date: "2024-01-28",
      Product_Category: "Electronics",
      Transportation_Mode: "Air",
      Supplier_Location: "China",
      Disruption_Type: "Weather",
      Customer_Demand: 100,
      Order_Quantity: 120,
    },
    {
      Order_ID: "ORD002",
      Supplier: "Supplier B",
      Order_Date: "2024-01-20",
      Expected_Delivery_Date: "2024-02-05",
      Actual_Delivery_Date: "2024-02-03",
      Product_Category: "Textiles",
      Transportation_Mode: "Sea",
      Supplier_Location: "India",
      Disruption_Type: "None",
      Customer_Demand: 200,
      Order_Quantity: 180,
    },
    // Add more sample data...
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "text/csv") {
      const reader = new FileReader()
      reader.onload = (e) => {
        const csv = e.target?.result as string
        const lines = csv.split("\n")
        const headers = lines[0].split(",")

        const parsedData: ProcurementData[] = lines
          .slice(1)
          .filter((line) => line.trim())
          .map((line) => {
            const values = line.split(",")
            return {
              Order_ID: values[0] || "",
              Supplier: values[1] || "",
              Order_Date: values[2] || "",
              Expected_Delivery_Date: values[3] || "",
              Actual_Delivery_Date: values[4] || "",
              Product_Category: values[5] || "",
              Transportation_Mode: values[6] || "",
              Supplier_Location: values[7] || "",
              Disruption_Type: values[8] || "",
              Customer_Demand: Number.parseInt(values[9]) || 0,
              Order_Quantity: Number.parseInt(values[10]) || 0,
            }
          })

        setData(parsedData)
      }
      reader.readAsText(file)
    }
  }

  const loadSampleData = () => {
    setData(sampleData)
  }

  const calculateLeadTime = (orderDate: string, actualDate: string): number => {
    const order = new Date(orderDate)
    const actual = new Date(actualDate)
    return Math.ceil((actual.getTime() - order.getTime()) / (1000 * 60 * 60 * 24))
  }

  const calculateDelay = (expectedDate: string, actualDate: string): number => {
    const expected = new Date(expectedDate)
    const actual = new Date(actualDate)
    return Math.ceil((actual.getTime() - expected.getTime()) / (1000 * 60 * 60 * 24))
  }

  const runAnalysis = () => {
    if (data.length === 0) return

    setIsAnalyzing(true)

    setTimeout(() => {
      const results: AnalysisResult[] = []

      // Q1: Which supplier has the highest average lead time?
      const supplierLeadTimes: { [key: string]: number[] } = {}
      data.forEach((row) => {
        const leadTime = calculateLeadTime(row.Order_Date, row.Actual_Delivery_Date)
        if (!supplierLeadTimes[row.Supplier]) {
          supplierLeadTimes[row.Supplier] = []
        }
        supplierLeadTimes[row.Supplier].push(leadTime)
      })

      const supplierAvgs = Object.entries(supplierLeadTimes).map(([supplier, times]) => ({
        supplier,
        avgLeadTime: times.reduce((a, b) => a + b, 0) / times.length,
      }))

      const highestLeadTimeSupplier = supplierAvgs.reduce((max, curr) =>
        curr.avgLeadTime > max.avgLeadTime ? curr : max,
      )

      results.push({
        question: "Which supplier has the highest average lead time?",
        answer: `${highestLeadTimeSupplier.supplier}`,
        value: `${highestLeadTimeSupplier.avgLeadTime.toFixed(1)} days`,
      })

      // Q2: What transportation mode has the lowest average lead time?
      const transportLeadTimes: { [key: string]: number[] } = {}
      data.forEach((row) => {
        const leadTime = calculateLeadTime(row.Order_Date, row.Actual_Delivery_Date)
        if (!transportLeadTimes[row.Transportation_Mode]) {
          transportLeadTimes[row.Transportation_Mode] = []
        }
        transportLeadTimes[row.Transportation_Mode].push(leadTime)
      })

      const transportAvgs = Object.entries(transportLeadTimes).map(([mode, times]) => ({
        mode,
        avgLeadTime: times.reduce((a, b) => a + b, 0) / times.length,
      }))

      const lowestLeadTimeTransport = transportAvgs.reduce((min, curr) =>
        curr.avgLeadTime < min.avgLeadTime ? curr : min,
      )

      results.push({
        question: "What transportation mode has the lowest average lead time?",
        answer: `${lowestLeadTimeTransport.mode}`,
        value: `${lowestLeadTimeTransport.avgLeadTime.toFixed(1)} days`,
      })

      // Q3: Which month shows the highest average delays?
      const monthlyDelays: { [key: string]: number[] } = {}
      data.forEach((row) => {
        const delay = calculateDelay(row.Expected_Delivery_Date, row.Actual_Delivery_Date)
        const month = new Date(row.Actual_Delivery_Date).toLocaleString("default", { month: "long" })
        if (!monthlyDelays[month]) {
          monthlyDelays[month] = []
        }
        monthlyDelays[month].push(delay)
      })

      const monthlyAvgs = Object.entries(monthlyDelays).map(([month, delays]) => ({
        month,
        avgDelay: delays.reduce((a, b) => a + b, 0) / delays.length,
      }))

      const highestDelayMonth = monthlyAvgs.reduce((max, curr) => (curr.avgDelay > max.avgDelay ? curr : max))

      results.push({
        question: "Which month shows the highest average delays in delivery?",
        answer: `${highestDelayMonth.month}`,
        value: `${highestDelayMonth.avgDelay.toFixed(1)} days`,
      })

      // Q4: What type of disruption leads to the longest average delay?
      const disruptionDelays: { [key: string]: number[] } = {}
      data.forEach((row) => {
        if (row.Disruption_Type !== "None") {
          const delay = calculateDelay(row.Expected_Delivery_Date, row.Actual_Delivery_Date)
          if (!disruptionDelays[row.Disruption_Type]) {
            disruptionDelays[row.Disruption_Type] = []
          }
          disruptionDelays[row.Disruption_Type].push(delay)
        }
      })

      const disruptionAvgs = Object.entries(disruptionDelays).map(([type, delays]) => ({
        type,
        avgDelay: delays.reduce((a, b) => a + b, 0) / delays.length,
      }))

      if (disruptionAvgs.length > 0) {
        const longestDelayDisruption = disruptionAvgs.reduce((max, curr) => (curr.avgDelay > max.avgDelay ? curr : max))

        results.push({
          question: "What type of disruption leads to the longest average delay?",
          answer: `${longestDelayDisruption.type}`,
          value: `${longestDelayDisruption.avgDelay.toFixed(1)} days`,
        })
      }

      // Q5: Which product category experiences the shortest average lead time?
      const categoryLeadTimes: { [key: string]: number[] } = {}
      data.forEach((row) => {
        const leadTime = calculateLeadTime(row.Order_Date, row.Actual_Delivery_Date)
        if (!categoryLeadTimes[row.Product_Category]) {
          categoryLeadTimes[row.Product_Category] = []
        }
        categoryLeadTimes[row.Product_Category].push(leadTime)
      })

      const categoryAvgs = Object.entries(categoryLeadTimes).map(([category, times]) => ({
        category,
        avgLeadTime: times.reduce((a, b) => a + b, 0) / times.length,
      }))

      const shortestLeadTimeCategory = categoryAvgs.reduce((min, curr) =>
        curr.avgLeadTime < min.avgLeadTime ? curr : min,
      )

      results.push({
        question: "Which product category experiences the shortest average lead time?",
        answer: `${shortestLeadTimeCategory.category}`,
        value: `${shortestLeadTimeCategory.avgLeadTime.toFixed(1)} days`,
      })

      setAnalysisResults(results)
      setIsAnalyzing(false)
    }, 2000)
  }

  const exportResults = () => {
    const csvContent = [
      ["Question", "Answer", "Value"],
      ...analysisResults.map((result) => [result.question, result.answer, result.value]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "lead-time-analysis-results.csv"
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/learning-hub">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Lead Time Analysis Tool</h1>
          </div>
          <Badge variant="secondary">Assignment 3</Badge>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Data Upload</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Procurement Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input ref={fileInputRef} type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
                  <div className="space-y-4">
                    <div className="text-4xl">📊</div>
                    <div>
                      <h3 className="text-lg font-medium">Upload CSV File</h3>
                      <p className="text-gray-600">Select a CSV file with procurement data</p>
                    </div>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={() => fileInputRef.current?.click()}>
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      <Button variant="outline" onClick={loadSampleData}>
                        <FileText className="w-4 h-4 mr-2" />
                        Load Sample Data
                      </Button>
                    </div>
                  </div>
                </div>

                {data.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Data Preview</h3>
                      <Badge variant="secondary">{data.length} records loaded</Badge>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-2 text-left">Order ID</th>
                            <th className="p-2 text-left">Supplier</th>
                            <th className="p-2 text-left">Product Category</th>
                            <th className="p-2 text-left">Transport Mode</th>
                            <th className="p-2 text-left">Order Date</th>
                            <th className="p-2 text-left">Expected Date</th>
                            <th className="p-2 text-left">Actual Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.slice(0, 5).map((row, index) => (
                            <tr key={index} className="border-t">
                              <td className="p-2">{row.Order_ID}</td>
                              <td className="p-2">{row.Supplier}</td>
                              <td className="p-2">{row.Product_Category}</td>
                              <td className="p-2">{row.Transportation_Mode}</td>
                              <td className="p-2">{row.Order_Date}</td>
                              <td className="p-2">{row.Expected_Delivery_Date}</td>
                              <td className="p-2">{row.Actual_Delivery_Date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {data.length > 5 && (
                        <p className="text-center text-gray-500 mt-2">... and {data.length - 5} more records</p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Run Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Please upload data first to run analysis</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h4 className="font-medium mb-2">Simple Questions</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Highest average lead time supplier</li>
                          <li>• Lowest lead time transportation mode</li>
                          <li>• Month with highest delays</li>
                          <li>• Disruption causing longest delays</li>
                          <li>• Category with shortest lead time</li>
                        </ul>
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-medium mb-2">Data Summary</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Total Orders: {data.length}</p>
                          <p>Unique Suppliers: {new Set(data.map((d) => d.Supplier)).size}</p>
                          <p>Product Categories: {new Set(data.map((d) => d.Product_Category)).size}</p>
                          <p>Transport Modes: {new Set(data.map((d) => d.Transportation_Mode)).size}</p>
                        </div>
                      </Card>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={runAnalysis}
                        disabled={isAnalyzing}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Run Analysis
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Analysis Results
                  </div>
                  {analysisResults.length > 0 && (
                    <Button onClick={exportResults} variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Results
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysisResults.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No analysis results yet. Run analysis first.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {analysisResults.map((result, index) => (
                      <Card key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-blue-50">
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">{result.question}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-700 font-semibold">{result.answer}</span>
                            <Badge variant="secondary">{result.value}</Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
