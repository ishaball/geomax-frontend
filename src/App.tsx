import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import Reviews from "./pages/ReviewPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ---------- When not logged in ---------- */}
          <SignedOut>
            <div className="flex justify-center items-center h-screen bg-gray-50">
              <SignIn />
            </div>
          </SignedOut>

          {/* ---------- When logged in ---------- */}
          <SignedIn>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</SignedIn>
           </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;