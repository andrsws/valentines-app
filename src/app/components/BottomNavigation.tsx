import { NavLink } from "react-router";
import { Home, Mail, Heart } from "lucide-react";

export function BottomNavigation() {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/read-when", icon: Mail, label: "Read When" },
    { to: "/memories", icon: Heart, label: "Memories" },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around h-20 pb-[34px] px-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
