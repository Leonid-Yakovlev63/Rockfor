import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";
import { useState } from "react";
const Posts = (props) => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    const [posts, setPost] = useState([
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Bugatti Veyron может проехать футбольное поле за одну секунду."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "В Германии морских котиков называют морскими собаками."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Средний человек за всю жизнь проводит две недели в ожидании смены сигнала светофора."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Самый быстрый мотоцикл в мире!Bub Seven Streamliner достиг средней скорости 590,63 км/ч и поставил новый рекорд."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Чаще всего в английских библиотеках воруют Книгу рекордов Гиннесса."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Только 10% пользователей, ищущих в Яндексе «любовь», действительно имеют ввиду это чувство."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "В 1984 году компания Gillette предложила по 1 миллиону долларов вокалистам группы ZZ Top Билли Гиббонсу и Дасти Хиллу, если они сбреют свои бороды перед телекамерами, но они отказались, сказав «Мы слишком ужасны без них»."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Богомол. Этот красавец выживает в природе благодаря своему яркому цвету, делающему его незаметным на фоне цветов. Его жизнь длится всего лишь 6 недель."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Громкий храп может достигать того же уровня децибелл, что и отбойный молоток."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Общая длина книжных полок Российской Государственной Библиотеки составляет около 275 километров."},
        {id : 1, userName : "Рокфор",title: "Случайный факт:", content: "Кровь пьют только самки комаров. Однако до свадьбы они не прочь попить воды или сок растений. Самцы питаются этим на протяжении всей своей жизни."},
    ]);

    let postsList = posts.map(d => <Post d = {d.id} title ={d.title} userName={d.userName} image = {d.image} content = {d.content}/>    );

    return (
    <div className={s.LentBody}>    
            <div className={s.posts}>
                {postsList}
            </div>
    </div>
);
};

export default Posts;
