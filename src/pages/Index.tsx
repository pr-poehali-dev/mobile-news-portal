import { useState } from 'react';
import { Newspaper, Search, Home, FileText, Megaphone, Mail, Briefcase, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  featured?: boolean;
}

const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Новый законопроект об экологии принят в первом чтении',
    category: 'Политика',
    date: '5 ноября 2025',
    excerpt: 'Депутаты одобрили инициативу по защите окружающей среды. Документ предусматривает ужесточение норм выбросов для промышленных предприятий и стимулирование перехода на возобновляемые источники энергии.',
    featured: true
  },
  {
    id: 2,
    title: 'Технологический прорыв: квантовые компьютеры становятся доступнее',
    category: 'Технологии',
    date: '5 ноября 2025',
    excerpt: 'Ученые представили новую архитектуру квантовых процессоров, которая снижает стоимость производства в десять раз.',
    featured: true
  },
  {
    id: 3,
    title: 'Олимпийские игры 2026: подготовка в самом разгаре',
    category: 'Спорт',
    date: '4 ноября 2025',
    excerpt: 'Комитет озвучил планы по строительству спортивных объектов и обновлению инфраструктуры принимающих городов.'
  },
  {
    id: 4,
    title: 'Центральный банк объявил о новой процентной ставке',
    category: 'Экономика',
    date: '4 ноября 2025',
    excerpt: 'Решение направлено на стабилизацию инфляции и поддержку отечественного производителя.'
  },
  {
    id: 5,
    title: 'Премьера оперы "Евгений Онегин" состоялась в новом театре',
    category: 'Культура',
    date: '3 ноября 2025',
    excerpt: 'Спектакль получил высокие оценки критиков за современную интерпретацию классического произведения.'
  },
  {
    id: 6,
    title: 'Медицинская реформа: что изменится для пациентов',
    category: 'Здоровье',
    date: '3 ноября 2025',
    excerpt: 'Министерство здравоохранения анонсировало внедрение электронных медицинских карт и расширение списка бесплатных процедур.'
  },
  {
    id: 7,
    title: 'Археологи обнаружили древнее поселение возрастом 5000 лет',
    category: 'Наука',
    date: '2 ноября 2025',
    excerpt: 'Находка проливает свет на жизнь древних цивилизаций и их культурные традиции.'
  },
  {
    id: 8,
    title: 'Новая линия метро откроется в декабре',
    category: 'Транспорт',
    date: '2 ноября 2025',
    excerpt: 'Пять новых станций свяжут центр города с отдаленными районами, сократив время в пути на 30 минут.'
  },
  {
    id: 9,
    title: 'Городская поликлиника объявляет набор медсестёр',
    category: 'Работа',
    date: '5 ноября 2025',
    excerpt: 'Требуются специалисты с опытом работы от 1 года. Официальное трудоустройство, соцпакет, зарплата от 45 000 рублей.'
  },
  {
    id: 10,
    title: 'IT-компания ищет frontend-разработчиков',
    category: 'Работа',
    date: '4 ноября 2025',
    excerpt: 'Требуется знание React, TypeScript. Удалённая работа, гибкий график. Зарплата до 150 000 рублей.'
  },
  {
    id: 11,
    title: 'Требуются водители категории C, E',
    category: 'Работа',
    date: '3 ноября 2025',
    excerpt: 'Работа на межгород, современная техника. Зарплата от 80 000 до 120 000 рублей в зависимости от опыта.'
  }
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'home' | 'news' | 'announcements' | 'jobs' | 'contacts'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredNews = mockNews.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary py-4 px-4 sticky top-0 bg-primary z-50">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-primary-foreground" />
              <div>
                <h1 className="font-serif text-xl font-black tracking-tight text-primary-foreground">ГОРЛОВСКАЯ МОЗАИКА</h1>
              </div>
            </div>
            <button 
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchQuery('');
              }}
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Поиск"
            >
              <Search className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
          
          {isSearchOpen && (
            <div className="relative mt-3">
              <Input 
                type="search"
                placeholder="Поиск..."
                className="bg-white border-0 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </div>
      </header>

      <nav className="border-b border-border bg-secondary/50 sticky top-[116px] z-40">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around gap-2">
            <button 
              onClick={() => setCurrentSection('home')}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${currentSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs font-semibold">Главная</span>
            </button>
            <button 
              onClick={() => setCurrentSection('news')}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${currentSection === 'news' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-semibold">Новости</span>
            </button>
            <button 
              onClick={() => setCurrentSection('announcements')}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${currentSection === 'announcements' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Megaphone className="w-5 h-5" />
              <span className="text-xs font-semibold">Объявления</span>
            </button>
            <button 
              onClick={() => setCurrentSection('jobs')}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${currentSection === 'jobs' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-semibold">Работа</span>
            </button>
            <button 
              onClick={() => setCurrentSection('contacts')}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${currentSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Mail className="w-5 h-5" />
              <span className="text-xs font-semibold">Контакты</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-4 py-6">
        {currentSection === 'home' && (
          <div className="space-y-6 animate-fade-in">
            {searchQuery && (
              <div className="text-sm text-muted-foreground">
                Найдено материалов: {filteredNews.length}
              </div>
            )}

            {featuredNews.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px bg-border flex-1" />
                  <h2 className="font-serif text-lg font-bold uppercase tracking-wide">Главное</h2>
                  <div className="h-px bg-border flex-1" />
                </div>
                
                <div className="space-y-4">
                  {featuredNews.map(article => (
                    <Card key={article.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {article.excerpt}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {regularNews.length > 0 && (
              <>
                <Separator className="my-6" />
                
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px bg-border flex-1" />
                    <h2 className="font-serif text-lg font-bold uppercase tracking-wide">Все новости</h2>
                    <div className="h-px bg-border flex-1" />
                  </div>
                  
                  <div className="space-y-4">
                    {regularNews.map(article => (
                      <div key={article.id} className="border-b border-border pb-4 last:border-0">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                        </div>
                        <h3 className="font-serif text-lg font-bold mb-1 leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/80">
                          {article.excerpt}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">По вашему запросу ничего не найдено</p>
              </div>
            )}
          </div>
        )}

        {currentSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-2xl font-bold text-center mb-6">Новости</h2>
            {filteredNews.map(article => (
              <Card key={article.id} className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {article.excerpt}
                </p>
              </Card>
            ))}
          </div>
        )}

        {currentSection === 'announcements' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-2xl font-bold text-center mb-6">Объявления</h2>
            <Card className="p-6">
              <h3 className="font-serif text-lg font-bold mb-3">Продам двухкомнатную квартиру</h3>
              <p className="text-sm text-muted-foreground mb-2">Опубликовано: 3 ноября 2025</p>
              <p className="text-sm leading-relaxed">
                54 кв.м., 3 этаж, отличный ремонт. Развитая инфраструктура района, рядом школа и детский сад. 
                Цена: 5 800 000 рублей.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-serif text-lg font-bold mb-3">Услуги репетитора по математике</h3>
              <p className="text-sm text-muted-foreground mb-2">Опубликовано: 2 ноября 2025</p>
              <p className="text-sm leading-relaxed">
                Опытный преподаватель с высшим образованием. Подготовка к ЕГЭ и ОГЭ, помощь школьникам 5-11 классов. 
                Индивидуальный подход, первое занятие бесплатно.
              </p>
            </Card>
          </div>
        )}

        {currentSection === 'jobs' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-2xl font-bold text-center mb-6">Вакансии</h2>
            {filteredNews.filter(article => article.category === 'Работа').map(article => (
              <Card key={article.id} className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {article.excerpt}
                </p>
              </Card>
            ))}
          </div>
        )}

        {currentSection === 'contacts' && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-4">
              <a href="tel:+74951234567" className="flex items-start gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Телефон</p>
                  <p className="font-semibold">+7 (495) 123-45-67</p>
                </div>
              </a>

              <a href="mailto:redakciya@mozaika-news.ru" className="flex items-start gap-4 p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Email редакции</p>
                  <p className="font-semibold text-sm">redakciya@mozaika-news.ru</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Адрес</p>
                  <p className="font-semibold text-sm">г. Москва, ул. Тверская, д. 18, офис 501</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">График работы</p>
                  <p className="font-semibold text-sm">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs text-muted-foreground text-center mb-3">Реклама</p>
              <a href="mailto:reklama@mozaika-news.ru" className="flex items-center justify-center gap-2 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">reklama@mozaika-news.ru</span>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t-4 border-primary mt-12 py-6 px-4 bg-secondary/30">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Newspaper className="w-5 h-5" />
            <p className="font-serif font-bold text-lg">ГОРЛОВСКАЯ МОЗАИКА</p>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Свидетельство о регистрации СМИ №123456 от 01.01.2020
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;