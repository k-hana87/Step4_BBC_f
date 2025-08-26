'use client';
import React from 'react';
import { I18nProvider } from './I18nProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}
