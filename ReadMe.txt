Dear 長官,

首先我想先感謝您們提供這個機會給我展現自己。
在前端這個領域，我還只是非常新的菜鳥，甚至還沒有跟別人討論過的經驗，
所以之前幾次面試的時候也是常常不懂面試官們的一些用語，
導致最後結果不甚理想。
所以這次十分感謝能夠直接透過撰寫作業來展示我的想法。
也希望長官們不吝設指教！


在開頭的import部分，我引入了useState和useEffect兩個方法來實現hook。
並且將class component App改寫成function component App。

宣告兩個const，items和isLoaded，分別儲存抓下來的api資料與是否讀取成功的布林變數。

呼叫useEffect方法使得在component render後，呼叫fetchData方法，並且不會重新觸發。

宣告fectchData方法：從github api上取回資料，用json()方法讀取、解析，再存入items內，並將isLoaded改成true。

因為function component直接回傳react element，所以不需要render()。

最後就是使用if判斷有沒有讀取到資料；若有，則回傳一個列表，包含avatar url、login、site admin、number of items

以上就是我的程式碼解釋部分

但由於不熟悉github api內容，其實對於題目有很多不明白的地方，
這份作業是我盡力將理解的部分呈現出來的形式，
但應該有許多部份還能再改進！
還希望各位長官們多多指教！
謝謝