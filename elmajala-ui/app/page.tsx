"use client"
import { AuroraBackgroundDemo } from "@/components/LandingBackground";
import InitCredentials from "@/hooks/CredentialsHook";

export default function Home() {
  InitCredentials()
  return (
    <div>
      <AuroraBackgroundDemo />
    </div>
  );
}
