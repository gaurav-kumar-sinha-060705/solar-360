import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolarAI from "./pages/SolarAI";
import SolarPay from "./pages/SolarPay";
import GreenCell from "./pages/GreenCell";
import SolarEd from "./pages/SolarEd";
import EcoMeter from "./pages/EcoMeter";
import AgriSolar from "./pages/AgriSolar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solar-ai" element={<SolarAI />} />
          <Route path="/solar-pay" element={<SolarPay />} />
          <Route path="/green-cell" element={<GreenCell />} />
          <Route path="/solar-ed" element={<SolarEd />} />
          <Route path="/eco-meter" element={<EcoMeter />} />
          <Route path="/agri-solar" element={<AgriSolar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
