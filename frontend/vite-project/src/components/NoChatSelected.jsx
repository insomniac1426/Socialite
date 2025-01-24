import { Player } from "@lottiefiles/react-lottie-player";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Lottie Animation */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <Player
              autoplay
              loop
              src="/lottie/chat.json"
              style={{ height: "64px", width: "64px" }}
            />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Socialite!</h2>
        <p className="text-base-content/60">
          Send and receive messages without keeping your phone online
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
