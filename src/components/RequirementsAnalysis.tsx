import { useEffect, useRef } from 'react'

// Erstmal eine einfache Alternative ohne Chart.js
export default function RequirementsAnalysis() {
  const requirements = [
    "Strukturiert & Verantwortungsbewusst",
    "Exzellente Kommunikation", 
    "Feedback als Chance sehen",
    "Mitdenken & wirklich helfen",
    "Prozesse hinterfragen & verbessern"
  ]

  return (
    <section className="mb-24">
      <h3 className="text-3xl font-bold text-center text-slate-200 mb-4">
        Anforderungs-Analyse: Ein Volltreffer
      </h3>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10">
        Eure Ausschreibung sagt: „Die Stelle passt perfekt zu dir, wenn…" – ich habe bei jedem Punkt innerlich genickt. 
        Hier die visuelle Bestätigung.
      </p>
      <div className="card p-4 sm:p-8 rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/20 border-4 border-accent mb-4">
              <span className="text-4xl font-bold text-accent">ICH</span>
            </div>
          </div>
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#0a192f] rounded-lg border border-slate-700">
                <span className="text-slate-300 font-medium">{req}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-slate-700 rounded-full h-3">
                    <div className="w-full h-3 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-accent font-bold text-sm">100%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-accent font-bold text-xl">Perfekte Übereinstimmung!</p>
            <p className="text-slate-400 mt-2">Alle Anforderungen werden voll erfüllt</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function RequirementsAnalysis() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const labels = [
      ['Strukturiert &', 'Verantwortungsbewusst'],
      ['Exzellente', 'Kommunikation'],
      ['Feedback als', 'Chance sehen'],
      ['Mitdenken &', 'wirklich helfen'],
      ['Prozesse hinterfragen', '& verbessern']
    ]

    const data = {
      labels: labels,
      datasets: [{
        label: 'Anforderung erfüllt',
        data: [5, 5, 5, 5, 5],
        fill: true,
        backgroundColor: 'rgba(100, 255, 218, 0.2)',
        borderColor: 'rgba(100, 255, 218, 1)',
        pointBackgroundColor: 'rgba(100, 255, 218, 1)',
        pointBorderColor: '#0a192f',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(100, 255, 218, 1)'
      }]
    }

    const chartOptions = {
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            color: 'rgba(203, 213, 225, 0.2)'
          },
          suggestedMin: 0,
          suggestedMax: 5,
          grid: {
            color: 'rgba(203, 213, 225, 0.2)'
          },
          pointLabels: {
            font: {
              size: 13,
              weight: '500'
            },
            color: '#ccd6f6'
          },
          ticks: {
            display: false,
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#112240',
          titleColor: '#ccd6f6',
          bodyColor: '#ccd6f6',
          callbacks: {
            title: function(tooltipItems: any) {
              const item = tooltipItems[0]
              let label = item.chart.data.labels[item.dataIndex]
              if (Array.isArray(label)) {
                return label.join(' ')
              } else {
                return label
              }
            },
            label: function() {
              return 'Anforderung wird voll und ganz erfüllt.'
            }
          }
        }
      }
    }

    const centerTextPlugin = {
      id: 'centerText',
      afterDraw: (chart: ChartJS) => {
        const ctx = chart.ctx
        const centerY = (chart as any).scales.r.yCenter
        const centerX = (chart as any).scales.r.xCenter
        
        ctx.save()
        ctx.font = 'bold 48px Inter'
        ctx.fillStyle = 'rgba(100, 255, 218, 0.8)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('ICH', centerX, centerY)
        ctx.restore()
      }
    }

    chartInstance.current = new ChartJS(ctx, {
      type: 'radar',
      data: data,
      options: chartOptions,
      plugins: [centerTextPlugin]
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section className="mb-24">
      <h3 className="text-3xl font-bold text-center text-slate-200 mb-4">
        Anforderungs-Analyse: Ein Volltreffer
      </h3>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10">
        Eure Ausschreibung sagt: „Die Stelle passt perfekt zu dir, wenn…" – ich habe bei jedem Punkt innerlich genickt. 
        Hier die visuelle Bestätigung.
      </p>
      <div className="card p-4 sm:p-8 rounded-lg shadow-lg">
        <div className="relative w-full max-w-[550px] mx-auto h-[350px] md:h-[400px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </section>
  )
}