"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SettingsPage() {
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangePassword = async () => {
    setError("");
    setSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Completá todos los campos");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas nuevas no coinciden");
      return;
    }

    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    setLoading(true);

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
      revokeOtherSessions: true,
    });

    if (error) {
      setError("La contraseña actual es incorrecta");
      setLoading(false);
      return;
    }

    setSuccess("Contraseña actualizada correctamente");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setLoading(false);
  };

  const handleChangeEmail = async () => {
    setError("");
    setSuccess("");

    if (!newEmail) {
      setError("Ingresá un email");
      return;
    }

    setLoading(true);

    const { error } = await authClient.changeEmail({
      newEmail,
      callbackURL: "/dashboard/settings",
    });

    if (error) {
      setError("No se pudo actualizar el email");
      setLoading(false);
      return;
    }

    setSuccess("Email actualizado correctamente");
    setNewEmail("");
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted mt-2">Manage your account settings.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 max-w-md">
        <h2 className="text-xl font-semibold mb-6">Change Email</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1.5">New Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChangeEmail()}
              className="w-full border border-border rounded-xl px-4 py-3 bg-background text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            onClick={handleChangeEmail}
            disabled={loading}
            className="w-full bg-primary text-white rounded-xl px-4 py-3 text-sm font-medium transition-all disabled:opacity-60"
          >
            {loading ? "Guardando..." : "Update Email"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 max-w-md">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChangePassword()}
              className="w-full border border-border rounded-xl px-4 py-3 bg-background text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-1.5">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChangePassword()}
              className="w-full border border-border rounded-xl px-4 py-3 bg-background text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-1.5">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChangePassword()}
              className="w-full border border-border rounded-xl px-4 py-3 bg-background text-sm focus:outline-none focus:border-primary transition-all"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            onClick={handleChangePassword}
            disabled={loading}
            className="w-full bg-primary text-white rounded-xl px-4 py-3 text-sm font-medium transition-all disabled:opacity-60"
          >
            {loading ? "Guardando..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
}
