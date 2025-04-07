
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AILanding() {
  return (
    <div className="min-h-screen bg-black text-white p-6 grid place-items-center">
      <Card className="max-w-xl w-full bg-zinc-900 shadow-2xl rounded-2xl p-6">
        <CardContent className="space-y-4">
          <h1 className="text-4xl font-bold text-center">Создай свой AI-Аватар</h1>
          <img 
            src="/your-demo-avatar.png" 
            alt="AI Avatar Demo" 
            className="rounded-xl mx-auto w-full max-w-sm" 
          />
          <p className="text-lg text-center">
            Закажи уникальный аватар в стиле киберпанк, аниме или глянца. Быстро, стильно, сгенерировано искусственным интеллектом!
          </p>
          <ul className="text-md list-disc pl-6">
            <li>Готов за 5 минут</li>
            <li>Цена: 3.000 тенге</li>
            <li>Подходит для Telegram, Instagram, Discord</li>
          </ul>
          <div className="text-center">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 rounded-full">
              <a href="https://t.me/CyberAvatarKZ_bot" target="_blank" rel="noopener noreferrer">
                Заказать через Telegram-бота
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
