import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { DelegationPage } from '@/pages/delegation';
import { ProjectPage } from '@/pages/project';
import { RegistrationPage } from '@/pages/registration';
import { SchedulePage } from '@/pages/schedule';
import { PricingPage } from '@/pages/pricing';
import { CAFPage } from '@/pages/caf';
import { ConventionPage } from '@/pages/convention';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/delegation" element={<DelegationPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/caf" element={<CAFPage />} />
      <Route path="/convention" element={<ConventionPage />} />
    </Routes>
  );
}