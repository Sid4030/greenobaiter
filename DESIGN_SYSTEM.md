# Greenovators 2026 - Design System & Color Scheme

## 🎨 Primary Color Palette

### Core Colors

| Color Name           | Hex Code  | RGB           | Usage                                    | Notes                           |
| -------------------- | --------- | ------------- | ---------------------------------------- | ------------------------------- |
| **Primary**          | `#062f21` | 6, 47, 33     | Headings, primary text, main CTA buttons | Dark Emerald - Brand foundation |
| **Secondary**        | `#0f9f6e` | 15, 159, 110  | Accents, hover states, highlights        | Solid Mint - Primary accent     |
| **Accent**           | `#bef264` | 190, 242, 100 | Text highlights, accent elements         | Light Lime - Pop color          |
| **Background Light** | `#fafaf9` | 250, 250, 249 | Main page background, card backgrounds   | Warm Alabaster                  |
| **Background Dark**  | `#051a12` | 5, 26, 18     | Dark mode sections, deep elements        | Deep Forest                     |

---

## 📝 Text Colors

| Color Name           | Hex Code  | RGB           | Usage                                       |
| -------------------- | --------- | ------------- | ------------------------------------------- |
| **Text Dark**        | `#062f21` | 6, 47, 33     | Primary text on light backgrounds           |
| **Text Light**       | `#f8fafc` | 248, 250, 252 | Primary text on dark backgrounds            |
| **Text Muted**       | `#6b7280` | 107, 114, 128 | Secondary text, subtle labels               |
| **Text Muted Light** | `#cbd5e1` | 203, 213, 225 | Subtle text on dark backgrounds             |
| **Pure Black**       | `#000000` | 0, 0, 0       | High contrast elements, specific highlights |
| **Pure White**       | `#ffffff` | 255, 255, 255 | Cards, panels, white space elements         |

---

## 🌈 Supplementary Colors (Used in Timeline & Status)

| Color Name        | Hex Code  | Usage                                             |
| ----------------- | --------- | ------------------------------------------------- |
| **Red**           | `#ef4444` | Error states, urgent deadlines, critical warnings |
| **Yellow**        | `#eab308` | Warning states, pending status, in-progress       |
| **Cyan/Sky Blue** | `#0284c7` | Information highlights, links, specific content   |
| **Purple**        | `#8b5cf6` | Special features, premium content                 |

---

## 🎯 Interactive Elements

### Buttons

#### Primary Button

- **Background**: `var(--primary)` (#062f21)
- **Text Color**: `var(--bg-light)` (#fafaf9)
- **Padding**: 0.75rem 1.75rem
- **Border Radius**: 8px
- **Font Weight**: 600
- **Box Shadow**: `0 4px 12px rgba(6, 47, 33, 0.08)`
- **Font Family**: Outfit (heading font)

### Hover & Interactive States

- **Hover Background Opacity**: rgba with 0.5-0.8 opacity
- **Transition Timing**: 0.25s cubic-bezier(0.16, 1, 0.3, 1)

---

## 🔲 Borders & Dividers

| Element               | Color Code                  | Notes                               |
| --------------------- | --------------------------- | ----------------------------------- |
| **Light Border**      | `rgba(6, 47, 33, 0.06)`     | Subtle borders on light backgrounds |
| **Dark Border**       | `rgba(255, 255, 255, 0.08)` | Subtle borders on dark backgrounds  |
| **Navigation Border** | `rgba(11, 61, 43, 0.08)`    | Navbar bottom border when scrolled  |

---

## 📐 Background Elements

### Grid Background

```css
background-color: #fafaf9;
background-image:
    linear-gradient(rgba(15, 159, 110, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 159, 110, 0.1) 1px, transparent 1px);
background-size: 80px 80px;
background-position: -1px -1px;
```

- Creates a subtle mint-tinted grid pattern
- 80px × 80px grid cells
- Used for hero sections and main pages

### Glass Panel

- **Background**: `#ffffff` with 95%+ opacity
- **Border**: `1px solid rgba(6, 47, 33, 0.06)`
- **Box Shadow**: `0 4px 15px rgba(0,0,0,0.01)`
- **Backdrop Filter**: `blur(12px)` (for frosted glass effect)

---

## 🌙 Navigation & Scrollbar

### Navbar Background

- **Scrolled State**: `rgba(251, 251, 249, 0.98)` - Opaque
- **Top State**: `rgba(251, 251, 249, 0.5)` - Semi-transparent
- **Backdrop Filter**: `blur(12px)`
- **Transition**: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`

### Scrollbar Styling

- **Track**: `var(--bg-light)` (#fafaf9)
- **Thumb**: `rgba(6, 47, 33, 0.1)`
- **Thumb Hover**: `var(--primary)` (#062f21)
- **Width**: 6px

---

## 📚 Typography System

### Font Families

| Usage         | Font                | Weight   | Use Case                         |
| ------------- | ------------------- | -------- | -------------------------------- |
| **Headings**  | Outfit (sans-serif) | 700      | h1, h2, h3, h4, h5, h6           |
| **Body Text** | Inter (sans-serif)  | 400, 600 | Paragraphs, labels, body content |

### Heading Colors

- Default: `var(--primary)` (#062f21)
- Line Height: 1.1

### Body Text

- Default: `var(--text-dark)` (#062f21)
- Line Height: 1.5

---

## ⚡ Animations & Transitions

### Easing Function

```css
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
```

### Transition Speeds

| Speed                   | Duration | CSS Variable                    |
| ----------------------- | -------- | ------------------------------- |
| **Fast**                | 0.2s     | `--transition-fast`             |
| **Medium**              | 0.3s     | `--transition-medium`           |
| **Navbar Scroll**       | 0.4s     | Custom transition               |
| **Timeline Animations** | 35-45s   | For infinite scrolling elements |

### Animation Examples

- **Cloud Movement**: 35-45s infinite linear animations
- **Button Hover**: 0.25s ease-premium transitions
- **Navbar Collapse**: 0.4s cubic-bezier transitions

---

## 🎨 Color Usage Guidelines

### For Posters & Marketing Materials

**Primary Layout (Dark Emerald #062f21)**

- Use for text, headings, and main visual elements
- Conveys trust, sustainability, and environmental focus

**Secondary Accent (Solid Mint #0f9f6e)**

- Use for call-to-action buttons
- Use for highlighting important information
- Creates energy and draws attention

**Light Accent (Light Lime #bef264)**

- Use sparingly for pop elements
- Use in hover states or animated elements
- Maintains visual interest without overwhelming

**Background (Warm Alabaster #fafaf9)**

- Use as poster background or large fills
- Represents cleanliness and sustainability

---

## 🌐 CSS Custom Properties (Root Variables)

```css
:root {
    /* Colors */
    --primary: #062f21;
    --primary-rgb: 6, 47, 33;
    --secondary: #0f9f6e;
    --secondary-rgb: 15, 159, 110;
    --accent: #bef264;
    --bg-light: #fafaf9;
    --bg-dark: #051a12;

    /* Text */
    --text-dark: #062f21;
    --text-light: #f8fafc;
    --text-muted: #6b7280;
    --text-muted-light: #cbd5e1;

    /* Borders */
    --border-light: rgba(6, 47, 33, 0.06);
    --border-dark: rgba(255, 255, 255, 0.08);

    /* Typography */
    --font-heading: "Outfit", sans-serif;
    --font-body: "Inter", sans-serif;

    /* Transitions */
    --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
    --transition-fast: 0.2s var(--ease-premium);
    --transition-medium: 0.3s var(--ease-premium);
}
```

---

## 🎯 Common Element Color Combinations

### Primary CTA Button

- Background: #062f21
- Text: #fafaf9
- Border: None
- Box Shadow: 0 4px 12px rgba(6, 47, 33, 0.08)

### Secondary CTA Button

- Background: #0f9f6e
- Text: #ffffff
- Border: None

### Card/Panel

- Background: #ffffff
- Border: 1px solid rgba(6, 47, 33, 0.06)
- Box Shadow: 0 4px 15px rgba(0,0,0,0.01)

### Timeline Event

- Text: #062f21
- Status Color: Varies (#ef4444, #eab308, #0f9f6e)

---

## 📱 Dark Mode Variations (Future Reference)

| Element        | Dark Mode Color           | Notes                |
| -------------- | ------------------------- | -------------------- |
| Background     | #051a12                   | Deep Forest          |
| Primary Text   | #f8fafc                   | Light text           |
| Secondary Text | #cbd5e1                   | Muted light          |
| Cards          | #0f1419                   | Dark card background |
| Border         | rgba(255, 255, 255, 0.08) | Light borders        |

---

## 💡 Design Philosophy

The Greenovators 2026 design system emphasizes:

- **Sustainability**: Emerald and mint colors representing environmental consciousness
- **Clarity**: High contrast text on light backgrounds for readability
- **Modern Minimalism**: Clean lines, subtle shadows, and purposeful spacing
- **Accessibility**: WCAG AA compliant color contrasts
- **Performance**: Optimized animations using cubic-bezier easing for smooth 60fps transitions

---

## 🎪 Quick Reference Swatches

Copy-paste these for digital tools:

```
Primary: #062f21
Secondary: #0f9f6e
Accent: #bef264
BG Light: #fafaf9
BG Dark: #051a12
Text: #062f21
Text Light: #f8fafc
Text Muted: #6b7280
Accent Red: #ef4444
Accent Yellow: #eab308
Accent Blue: #0284c7
Accent Purple: #8b5cf6
```

---

**Last Updated**: 2026
**Design System Version**: 1.0
**Framework**: React + CSS Custom Properties
