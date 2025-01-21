import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! Sid how are you?", isSent: false },
  { id: 2, content: "I'm fine just exploring some new techstacks", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-6 pt-20 max-w-5xl">
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Theme</h2>
          <p className="text-sm text-base-content/70">Customize the look of your chat interface</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-2 p-3 rounded-lg border
                ${theme === t ? "border-primary bg-primary/10" : "border-base-300 hover:border-primary/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[12px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="text-2xl font-bold mb-4">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-5 bg-base-200">
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div className="bg-base-100 rounded-xl shadow-md overflow-hidden">
                {/* Chat Header */}
                <div className="px-5 py-4 border-b border-base-300 bg-base-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Saksham</h3>
                    <p className="text-sm text-base-content/70">Online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-5 space-y-5 min-h-[220px] max-h-[220px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[75%] rounded-xl p-4 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                        `}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-2
                            ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-5 border-t border-base-300 bg-base-100 flex gap-3">
                  <input
                    type="text"
                    className="input input-bordered flex-1 text-sm h-11 rounded-lg"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary h-11 px-4">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
