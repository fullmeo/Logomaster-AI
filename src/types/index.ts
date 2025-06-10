export interface FormData {
  businessName: string
  businessDescription: string
  industry: string
  style: string
  complexity?: number
  modernity?: number
  professionalism?: number
}

export interface LogoData {
  svg: string
  title: string
  description: string
  structure: any
  colors: string[]
  initials: string
  metadata: any
}

export interface QualityAnalysis {
  score: number
  issues: string[]
}

export interface GenerationState {
  isGenerating: boolean
  currentStep: string
  progress: number
}
