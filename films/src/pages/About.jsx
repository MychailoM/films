import "../styles/About.css"

export default function About(){
    return(
               <div className="about-page-container">
      {/* Заголовок */}
      <header className="about-header">
        <h1 className="about-title">🎬 Ласкаво просимо до CineFinder!</h1>
        <p className="about-subtitle">
          CineFinder – твій персональний помічник у світі кіно. Тут ти знайдеш будь-який фільм, 
          дізнаєшся про акторів, прочитаєш рецензії та створиш власну кіноколекцію.
        </p>
      </header>

      {/* Про сайт */}
      <section className="about-section">
        <h2 className="about-section-title">Що робить наш сайт:</h2>
        <ul className="about-features-list">
          <li className="about-feature-item">🔍 Швидкий та зручний пошук фільмів за назвою та жанром</li>
          <li className="about-feature-item">⭐ Перегляд рейтингу та рецензій від справжніх кінофанатів</li>
          <li className="about-feature-item">🎭 Інформація про акторський склад та режисерів</li>
          <li className="about-feature-item">📂 Можливість створювати та зберігати власну колекцію фільмів</li>
          <li className="about-feature-item">💡 Рекомендації на основі твого смаку та трендів</li>
        </ul>
      </section>

      {/* Додаткова інформація */}
      <section className="about-additional">
        <h2 className="about-section-title">Навіщо це тобі:</h2>
        <p className="about-text">
          CineFinder допомагає економити час і знайти фільм на будь-який настрій. 
          Більше ніякого безцільного гортання стрімінгових сервісів — тепер всі твої улюблені 
          фільми та новинки доступні в одному місці.
        </p>
      </section>

      {/* Заклик до дії */}
      <section className="about-cta">
        <h2 className="about-cta-title">Готовий почати?</h2>
        <p className="about-cta-subtitle">Введи назву фільму у пошуку та відкрий для себе кіномагію!</p>
      </section>
    </div>
    )
}