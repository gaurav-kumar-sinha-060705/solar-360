import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Solar 360 Premium Palette
				solar: {
					core: 'hsl(var(--solar-core))',
					platinum: 'hsl(var(--solar-platinum))',
					gold: 'hsl(var(--solar-gold))',
					amber: 'hsl(var(--solar-amber))'
				},
				
				// Luxury Tech Foundation
				tech: {
					obsidian: 'hsl(var(--tech-obsidian))',
					graphite: 'hsl(var(--tech-graphite))',
					slate: 'hsl(var(--tech-slate))',
					silver: 'hsl(var(--tech-silver))'
				},
				
				// Trust & Reliability
				trust: {
					blue: 'hsl(var(--trust-blue))',
					teal: 'hsl(var(--trust-teal))',
					green: 'hsl(var(--trust-green))'
				},
				
				// Energy Dynamics
				energy: {
					cyan: 'hsl(var(--energy-cyan))',
					electric: 'hsl(var(--energy-electric))',
					plasma: 'hsl(var(--energy-plasma))'
				},
				
				// Ultra Luxury Glass
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
					shadow: 'hsl(var(--glass-shadow))',
					premium: 'hsl(var(--glass-premium))'
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					premium: 'hsl(var(--card-premium))'
				}
			},
			
			// Ultra Luxury Gradients
			backgroundImage: {
				'gradient-solar': 'var(--gradient-solar)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-trust': 'var(--gradient-trust)',
				'gradient-energy': 'var(--gradient-energy)',
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			
			// Premium Shadows & Effects
			boxShadow: {
				'solar': 'var(--shadow-solar)',
				'premium': 'var(--shadow-premium)',
				'floating': 'var(--shadow-floating)',
				'trust': 'var(--shadow-trust)',
				'luxury': 'var(--shadow-luxury)',
				'glow': '0 0 40px hsl(var(--solar-core) / 0.6)',
				'glow-lg': '0 0 80px hsl(var(--solar-core) / 0.4)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			// Advanced Typography
			fontFamily: {
				'solar': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Inter', 'system-ui', 'sans-serif']
			},
			
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9' }]
			},
			
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'50%': { transform: 'translateY(-15px) rotate(0deg)' },
					'75%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'energy-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'translateX(-100%)' },
					'50%': { opacity: '1', transform: 'translateX(100%)' }
				},
				'solar-spin': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--solar-core) / 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--solar-core) / 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '0.6' },
					'90%': { opacity: '0.6' },
					'100%': { transform: 'translateY(-10vh) rotate(360deg)', opacity: '0' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite 2s',
				'energy-pulse': 'energy-pulse 3s ease-in-out infinite',
				'solar-spin': 'solar-spin 20s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'particle-float': 'particle-float 15s linear infinite',
				'zoom-in': 'zoom-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-gentle': 'bounce 2s ease-in-out infinite'
			},
			
			// Advanced Spacing & Sizing
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'100': '25rem',
				'128': '32rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
