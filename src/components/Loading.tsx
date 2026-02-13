export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full space-y-4">
      <div className="flex justify-center items-center gap-3 w-20 h-20">
        <span className="w-4 h-4 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}
