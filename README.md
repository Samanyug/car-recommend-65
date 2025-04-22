
# Car Finder India 🚗

A modern web application to help users find their perfect car match in India based on their preferences, budget, and requirements.

## Features

- **Advanced Car Search**: Filter cars by:
  - Budget (with Indian currency formatting)
  - Body Type (SUV, Sedan, Hatchback, etc.)
  - Fuel Type (Petrol, Diesel, Electric, CNG, Hybrid)
  - Transmission Type (Manual, Automatic, AMT, CVT, DCT)
- **Smart Recommendations**: Get personalized car suggestions based on your preferences
- **Interactive UI**: Modern, responsive interface with real-time updates
- **Indian Market Focus**: Curated database of cars available in India with prices in INR

## Technology Stack

- **Frontend**: React + TypeScript
- **UI Components**: 
  - Shadcn/ui for consistent, accessible components
  - Tailwind CSS for styling
  - Lucide React for icons
- **State Management**: React Query for efficient data handling
- **Build Tool**: Vite
- **Animations**: Tailwind CSS animations

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd car-finder-india
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
├── components/         # UI components
│   ├── ui/            # Shadcn UI components
│   ├── CarCard.tsx    # Car display component
│   └── ...
├── data/              # Data sources
│   └── carData.ts     # Car database
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── utils/             # Utility functions
└── App.tsx            # Root component
```

## Key Features Implementation

### Car Recommendation Engine

The recommendation engine in `utils/recommendationEngine.ts` uses multiple criteria to match cars:
- Budget matching (with 10% flexibility)
- Body type preferences
- Fuel type preferences
- Transmission preferences

### Price Formatting

Prices are formatted in Indian currency notation (Lakhs, Crores) for better readability:
```typescript
₹10.5 Lakh
₹1.2 Cr
```

### Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Built with [Vite](https://vitejs.dev)
