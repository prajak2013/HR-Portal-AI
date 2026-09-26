import { Bot } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 p-5">
      <div className="rounded-full bg-blue-100 p-3">
        <Bot className="text-blue-600" size={24} />
      </div>

      <div>
        <h2 className="font-semibold text-slate-800">
          HR Assistant
        </h2>

        <p className="text-sm text-green-600">
          Online
        </p>
      </div>
    </div>
  );
}