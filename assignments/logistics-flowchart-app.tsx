"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { ArrowLeft, Download, Save, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Node {
  id: string
  type: "supplier" | "warehouse" | "distribution" | "retail" | "transport"
  label: string
  x: number
  y: number
}

interface Connection {
  from: string
  to: string
}

const nodeTypes = [
  { type: "supplier" as const, label: "Supplier", color: "bg-blue-500", icon: "🏭" },
  { type: "warehouse" as const, label: "Warehouse", color: "bg-green-500", icon: "🏢" },
  { type: "distribution" as const, label: "Distribution", color: "bg-purple-500", icon: "📦" },
  { type: "retail" as const, label: "Retail", color: "bg-orange-500", icon: "🏪" },
  { type: "transport" as const, label: "Transport", color: "bg-red-500", icon: "🚛" },
]

export default function LogisticsFlowchartApp() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [draggedNode, setDraggedNode] = useState<string | null>(null)
  const [editingNode, setEditingNode] = useState<string | null>(null)
  const [newLabel, setNewLabel] = useState("")
  const canvasRef = useRef<HTMLDivElement>(null)

  const addNode = (type: Node["type"]) => {
    const newNode: Node = {
      id: `${type}-${Date.now()}`,
      type,
      label: nodeTypes.find((nt) => nt.type === type)?.label || type,
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50,
    }
    setNodes([...nodes, newNode])
  }

  const deleteNode = (nodeId: string) => {
    setNodes(nodes.filter((n) => n.id !== nodeId))
    setConnections(connections.filter((c) => c.from !== nodeId && c.to !== nodeId))
    setSelectedNode(null)
  }

  const updateNodePosition = (nodeId: string, x: number, y: number) => {
    setNodes(nodes.map((n) => (n.id === nodeId ? { ...n, x, y } : n)))
  }

  const updateNodeLabel = (nodeId: string, label: string) => {
    setNodes(nodes.map((n) => (n.id === nodeId ? { ...n, label } : n)))
    setEditingNode(null)
    setNewLabel("")
  }

  const addConnection = (fromId: string, toId: string) => {
    if (fromId !== toId && !connections.some((c) => c.from === fromId && c.to === toId)) {
      setConnections([...connections, { from: fromId, to: toId }])
    }
  }

  const handleNodeMouseDown = (nodeId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setDraggedNode(nodeId)
    setSelectedNode(nodeId)
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (draggedNode && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        updateNodePosition(draggedNode, x - 50, y - 25)
      }
    },
    [draggedNode],
  )

  const handleMouseUp = () => {
    setDraggedNode(null)
  }

  const exportAsPNG = () => {
    // In a real implementation, you'd use html2canvas or similar
    alert("Export functionality would be implemented with html2canvas library")
  }

  const saveFlowchart = () => {
    const data = { nodes, connections }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "logistics-flowchart.json"
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
            <h1 className="text-2xl font-bold text-gray-900">Logistics Flowchart Builder</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={saveFlowchart} variant="outline" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button onClick={exportAsPNG} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export PNG
            </Button>
          </div>
        </nav>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Node Types */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Add Nodes</h3>
              <div className="grid grid-cols-1 gap-2">
                {nodeTypes.map((nodeType) => (
                  <Button
                    key={nodeType.type}
                    onClick={() => addNode(nodeType.type)}
                    variant="outline"
                    className="justify-start gap-3 h-12"
                  >
                    <span className="text-lg">{nodeType.icon}</span>
                    <span>{nodeType.label}</span>
                    <Plus className="w-4 h-4 ml-auto" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Node Properties */}
            {selectedNode && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Node Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {editingNode === selectedNode ? (
                    <div className="space-y-2">
                      <Input
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                        placeholder="Enter new label"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            updateNodeLabel(selectedNode, newLabel)
                          }
                        }}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => updateNodeLabel(selectedNode, newLabel)}>
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setEditingNode(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Label: {nodes.find((n) => n.id === selectedNode)?.label}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingNode(selectedNode)
                            setNewLabel(nodes.find((n) => n.id === selectedNode)?.label || "")
                          }}
                        >
                          Edit Label
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteNode(selectedNode)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Instructions</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-gray-600 space-y-2">
                <p>• Click "Add Nodes" to create logistics components</p>
                <p>• Drag nodes to reposition them</p>
                <p>• Click nodes to select and edit</p>
                <p>• Ctrl+Click between nodes to connect them</p>
                <p>• Use Save/Export to preserve your work</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={canvasRef}
            className="w-full h-full relative bg-gray-50 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={(e) => {
              if (e.ctrlKey && selectedNode) {
                // Add connection logic here
                const rect = canvasRef.current?.getBoundingClientRect()
                if (rect) {
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const targetNode = nodes.find((n) => x >= n.x && x <= n.x + 100 && y >= n.y && y <= n.y + 50)
                  if (targetNode && targetNode.id !== selectedNode) {
                    addConnection(selectedNode, targetNode.id)
                  }
                }
              }
            }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Connections */}
            <svg className="absolute inset-0 pointer-events-none">
              {connections.map((conn, index) => {
                const fromNode = nodes.find((n) => n.id === conn.from)
                const toNode = nodes.find((n) => n.id === conn.to)
                if (!fromNode || !toNode) return null

                const fromX = fromNode.x + 50
                const fromY = fromNode.y + 25
                const toX = toNode.x + 50
                const toY = toNode.y + 25

                return (
                  <g key={index}>
                    <line
                      x1={fromX}
                      y1={fromY}
                      x2={toX}
                      y2={toY}
                      stroke="#6b7280"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>
                )
              })}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                </marker>
              </defs>
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const nodeType = nodeTypes.find((nt) => nt.type === node.type)
              return (
                <div
                  key={node.id}
                  className={`absolute w-24 h-12 rounded-lg shadow-lg cursor-move select-none transition-all ${
                    selectedNode === node.id ? "ring-2 ring-blue-500 scale-105" : ""
                  } ${nodeType?.color || "bg-gray-500"} text-white flex items-center justify-center text-xs font-medium`}
                  style={{ left: node.x, top: node.y }}
                  onMouseDown={(e) => handleNodeMouseDown(node.id, e)}
                >
                  <div className="text-center">
                    <div className="text-lg mb-1">{nodeType?.icon}</div>
                    <div className="truncate px-1">{node.label}</div>
                  </div>
                </div>
              )
            })}

            {/* Empty State */}
            {nodes.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-medium mb-2">Start Building Your Flowchart</h3>
                  <p className="text-sm">Add nodes from the sidebar to begin creating your logistics flow</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
