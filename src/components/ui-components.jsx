// Simple UI components without dependencies

// Button component
export function Button({ children, variant = "default", size = "default", className = "", ...props }) {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    }
  
    const sizeStyles = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    }
  
    const combinedClassName = `${baseStyles} ${variantStyles[variant] || ""} ${sizeStyles[size] || ""} ${className}`
  
    return (
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    )
  }
  
  // Card components
  export function Card({ className = "", ...props }) {
    return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
  }
  
  export function CardHeader({ className = "", ...props }) {
    return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  }
  
  export function CardTitle({ className = "", ...props }) {
    return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  }
  
  export function CardDescription({ className = "", ...props }) {
    return <p className={`text-sm text-muted-foreground ${className}`} {...props} />
  }
  
  export function CardContent({ className = "", ...props }) {
    return <div className={`p-6 pt-0 ${className}`} {...props} />
  }
  
  export function CardFooter({ className = "", ...props }) {
    return <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  }
  
  // Badge component
  export function Badge({ variant = "default", className = "", ...props }) {
    const variantStyles = {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "text-foreground border border-input",
    }
  
    return (
      <div
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantStyles[variant] || ""} ${className}`}
        {...props}
      />
    )
  }
  
  