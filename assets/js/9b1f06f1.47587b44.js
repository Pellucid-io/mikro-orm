"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9994],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={slug:"handling-transactions-and-concurrency-in-mikroorm",title:"Handling Transactions and Concurrency in MikroORM",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},l=void 0,c={permalink:"/blog/handling-transactions-and-concurrency-in-mikroorm",source:"@site/blog/2019-06-18-handling-transactions-and-concurrency-in-mikroorm.md",title:"Handling Transactions and Concurrency in MikroORM",description:"How to handle transactions and concurrency with ease.",date:"2019-06-18T00:00:00.000Z",formattedDate:"June 18, 2019",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],readingTime:9.705,truncated:!0,authors:[{name:"Martin Ad\xe1mek",title:"Author of MikroORM",url:"https://github.com/B4nan",imageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4"}],frontMatter:{slug:"handling-transactions-and-concurrency-in-mikroorm",title:"Handling Transactions and Concurrency in MikroORM",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},prevItem:{title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",permalink:"/blog/mikro-orm-3-released"},nextItem:{title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",permalink:"/blog/introducing-mikroorm-typescript-data-mapper-orm-with-identity-map"}},p={authorsImageUrls:[void 0]},u=[{value:"Note about persisting",id:"note-about-persisting",level:2},{value:"Transaction demarcation",id:"transaction-demarcation",level:2},{value:"Approach 1: Implicitly",id:"approach-1-implicitly",level:3},{value:"Approach 2: Explicitly",id:"approach-2-explicitly",level:3},{value:"Exception Handling",id:"exception-handling",level:3},{value:"Concurrency and\xa0locking",id:"concurrency-andlocking",level:2},{value:"Why we need concurrency control?",id:"why-we-need-concurrency-control",level:3},{value:"Optimistic Locking",id:"optimistic-locking",level:3},{value:"Pessimistic Locking",id:"pessimistic-locking",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to handle transactions and concurrency with ease."),(0,i.kt)("h2",{id:"note-about-persisting"},"Note about persisting"),(0,i.kt)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM: ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"em.persist(entity, flush?: boolean)")," is used to mark new entities for future persisting. It will make the entity managed by given ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," and once ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," will be called, it will be written to the database. Second boolean parameter can be used to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," immediately. Its default value is configurable via ",(0,i.kt)("inlineCode",{parentName:"p"},"autoFlush")," option."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"autoFlush")," is currently set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", which will change in upcoming major release. Users are encouraged to either set ",(0,i.kt)("inlineCode",{parentName:"p"},"autoFlush")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persistLater()")," (equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist(entity, false)"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persistAndFlush()")," methods instead. Every time persisting is mentioned in this article, it is with ",(0,i.kt)("inlineCode",{parentName:"p"},"autoFlush")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in mind.")),(0,i.kt)("p",null,"To understand ",(0,i.kt)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if it\u2019s fetched from the database (via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.find()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity) or registered as new through ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and perform according database queries. As an entity loaded from database becomes managed automatically, you do not have to call ",(0,i.kt)("inlineCode",{parentName:"p"},"persist")," on those, and ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," is enough to update them."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1600/0*Eo5JP9abOfPV24Uf.jpg",alt:null})),(0,i.kt)("h2",{id:"transaction-demarcation"},"Transaction demarcation"),(0,i.kt)("p",null,"Transaction demarcation is the task of defining your transaction boundaries. For the most part, MikroORM already takes care of proper transaction demarcation for you: All the write operations (INSERT/UPDATE/DELETE) are queued until ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()")," is invoked which wraps all of these changes in a single transaction. However, MikroORM also allows (and encourages) you to take over and control transaction demarcation yourself."),(0,i.kt)("h3",{id:"approach-1-implicitly"},"Approach 1: Implicitly"),(0,i.kt)("p",null,"The first approach is to use the implicit transaction handling provided by the MikroORM ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". Given the following code snippet, without any explicit transaction demarcation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = new User();\nuser.name = 'George';\nawait orm.em.persistAndFlush(user);\n")),(0,i.kt)("p",null,"Since we do not do any custom transaction demarcation in the above code, ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()")," will begin and commit/rollback a transaction. This is sufficient if all the data manipulation that is part of a unit of work happens through the domain model and thus the ORM\u200a\u2014\u200ain other words, unless you run some write queries manually, via ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", or use one of ",(0,i.kt)("inlineCode",{parentName:"p"},"em.nativeInsert/Update/Delete")," helpers."),(0,i.kt)("p",null,"Here is a bit more complex example where multiple entities are involved:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, id, ['books.tags', 'books.publisher']);\nauthor.books[0].title = 'New book name';\nauthor.books[0].tags[0].name = 'old';\nauthor.books[0].tags.add(new BookTag('sale'));\nauthor.books[0].publisher.name = 'New publisher name';\nawait orm.em.flush();\n")),(0,i.kt)("p",null,"We load one author by id, all his books and their tags as well as their publisher. For simplicity, let\u2019s assume the author has one book associated, which has one book tag and one publisher."),(0,i.kt)("p",null,"Then we update multiple things on book of that author, editing name of the tag, adding new one, and changing publisher\u2019s name. As we are working with already managed entities (retrieved from ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),"), we can simply ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," without needing to ",(0,i.kt)("inlineCode",{parentName:"p"},"persist")," those entities."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," call here will compute all differences and run database queries accordingly. They will all be encapsulated in a transaction, as you can see from following list of fired queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"START TRANSACTION;\nINSERT INTO `book_tag` (`name`) VALUES (?);\nUPDATE `book` SET `title` = ? WHERE `id` = ?;\nDELETE FROM `book_to_book_tag` WHERE `book_id` = ?;\nINSERT INTO `book_to_book_tag` (`book_id`, `book_tag_id`) VALUES (?, ?);\nINSERT INTO `book_to_book_tag` (`book_id`, `book_tag_id`) VALUES (?, ?);\nUPDATE `publisher` SET `name` = ? WHERE `id` = ?;\nUPDATE `book_tag` SET `name` = ? WHERE `id` = ?;\nCOMMIT;\n")),(0,i.kt)("h3",{id:"approach-2-explicitly"},"Approach 2: Explicitly"),(0,i.kt)("p",null,"The explicit alternative is to use the transactions API directly to control the boundaries. The code then looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.beginTransaction();\n\ntry {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  await orm.em.persistAndFlush(user);\n  await orm.em.commit();\n} catch (e) {\n  await orm.em.rollback();\n  throw e;\n}\n")),(0,i.kt)("p",null,"Explicit transaction demarcation is required when you want to include custom DBAL operations in a unit of work (e.g. when firing native SQL UPDATE queries) or when you want to make use of some methods of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," API that require an active transaction (e.g. locking)\u200a\u2014\u200asuch methods will throw a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," to inform you of that requirement."),(0,i.kt)("p",null,"A more convenient alternative for explicit transaction demarcation is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),". It will automatically start the transaction, execute your asynchronous callback and commit it. In case of an exception during those operations, the transaction will be automatically rolled back and the exception will be re-thrown. An example that is functionally equivalent to the previously shown code looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.transactional(async _em => {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  _em.persistLater(user);\n});\n")),(0,i.kt)("p",null,"In the callback parameter, you will get forked ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," that will contain a copy of the current Identity Map. You should use this copy instead of the parent one for all queries inside the transaction. It will be flushed prior to transaction commit."),(0,i.kt)("h3",{id:"exception-handling"},"Exception Handling"),(0,i.kt)("p",null,"When using ",(0,i.kt)("em",{parentName:"p"},"implicit")," transaction demarcation and an exception occurs during ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", the transaction is automatically rolled back."),(0,i.kt)("p",null,"When using ",(0,i.kt)("em",{parentName:"p"},"explicit")," transaction demarcation and an exception occurs, the transaction should be rolled back immediately as demonstrated in the example above. Users are encouraged to use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)")," which will handle that automatically."),(0,i.kt)("p",null,"As a result of this procedure, all previously managed or removed instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," become detached. The state of the detached objects will be the state at the point at which the transaction was rolled back. The state of the objects is in no way rolled back and thus the objects are now out of sync with the database. The application can continue to use the detached objects, knowing that their state is potentially no longer accurate."),(0,i.kt)("p",null,"If you intend to start another unit of work after an exception has occurred you should do that with a new ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". Simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.fork()")," to obtain fresh copy with cleared identity map."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1600/0*D4B7hf_Up9bc9wzg.jpg",alt:null})),(0,i.kt)("h2",{id:"concurrency-andlocking"},"Concurrency and\xa0locking"),(0,i.kt)("h3",{id:"why-we-need-concurrency-control"},"Why we need concurrency control?"),(0,i.kt)("p",null,"If transactions are executed ",(0,i.kt)("em",{parentName:"p"},"serially")," (one at a time), no transaction concurrency exists. However, if concurrent transactions with interleaving operations are allowed, you may easily run into one of those problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The lost update problem"),(0,i.kt)("li",{parentName:"ol"},"The dirty read problem"),(0,i.kt)("li",{parentName:"ol"},"The incorrect summary problem")),(0,i.kt)("p",null,"Take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://www.includehelp.com/dbms/concurrency-and-problem-due-to-concurrency.aspx"},"this article")," for in-depth explanation of those."),(0,i.kt)("p",null,"To mitigate those problems, MikroORM offers support for Pessimistic and Optimistic locking strategies natively. This allows you to take very fine-grained control over what kind of locking is required for your entities in your application."),(0,i.kt)("h3",{id:"optimistic-locking"},"Optimistic Locking"),(0,i.kt)("p",null,"Database transactions are fine for concurrency control during a single request. However, a database transaction should not span across requests, the so-called \u201cuser think time\u201d. Therefore a long-running \u201cbusiness transaction\u201d that spans multiple requests needs to involve several database transactions. Thus, database transactions alone can no longer control concurrency during such a long-running business transaction. Concurrency control becomes the partial responsibility of the application itself."),(0,i.kt)("p",null,"MikroORM has integrated support for automatic optimistic locking via a version field. In this approach any entity that should be protected against concurrent modifications during long-running business transactions gets a version field that is either a simple number or a Date (timestamp). When changes to such an entity are persisted at the end of a long-running conversation the version of the entity is compared to the version in the database and if they don\u2019t match, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," is thrown, indicating that the entity has been modified by someone else already."),(0,i.kt)("p",null,"To define a version field, simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Property")," decorator with ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," flag set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Only ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," types are allowed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class User {\n  // ...\n  @Property({ version: true })\n  version: number;\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Book {\n  // ...\n  @Property({ version: true })\n  version: Date;\n  // ...\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Version numbers (not timestamps) should be preferred as they can not potentially conflict in a highly concurrent environment, unlike timestamps where this is a possibility, depending on the resolution of the timestamp on the particular database platform.")),(0,i.kt)("p",null,"When a version conflict is encountered during ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," is thrown and the active transaction rolled back (or marked for rollback). This exception can be caught and handled. Potential responses to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," are to present the conflict to the user or to refresh or reload objects in a new transaction and then retrying the transaction."),(0,i.kt)("p",null,"The time between showing an update form and actually modifying the entity can in the worst scenario be as long as your applications session timeout. If changes happen to the entity in that time frame you want to know directly when retrieving the entity that you will hit an optimistic locking exception."),(0,i.kt)("p",null,"You can always verify the version of an entity during a request either when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const theEntityId = 1;\nconst expectedVersion = 184;\n\ntry {\n  const entity = await orm.em.findOne(User, theEntityId, { lockMode: LockMode.OPTIMISTIC, lockVersion: expectedVersion });\n  // do the work\n  await orm.em.flush();\n} catch (e) {\n  console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),(0,i.kt)("p",null,"Or you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.lock()")," to find out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const theEntityId = 1;\nconst expectedVersion = 184;\nconst entity = await orm.em.findOne(User, theEntityId);\n\ntry {\n  // assert version\n  await orm.em.lock(entity, LockMode.OPTIMISTIC, expectedVersion);\n} catch (e) {\n  console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),(0,i.kt)("p",null,"Using optimistic locking correctly, you ",(0,i.kt)("strong",{parentName:"p"},"have")," to pass the version as an additional parameter when updating entity. See following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await fetch('api.example.com/book/123');\nconst book = res.json();\nconsole.log(book.version); // prints the current version\n\n// user does some changes and calls the PUT handler\nconst changes = { title: 'new title' };\nawait fetch('api.example.com/book/123', {\n  method: 'PUT',\n  body: {\n    ...changes,\n    version: book.version,\n  },\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// GET /book/:id\nasync findOne(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id);\n  res.json(book);\n}\n\n// PUT /book/:id\nasync update(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id, { lockMode: LockMode.OPTIMISTIC, lockVersion: req.body.version });\n  book.assign(req.body);\n  await this.em.flush();\n\n  res.json(book);\n}\n")),(0,i.kt)("p",null,"Your frontend app loads an entity from API, the response includes the version property. User makes some changes and fires PUT request back to the API, with version field included in the payload. The PUT handler of the API then reads the version and passes it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()")," call."),(0,i.kt)("h2",{id:"pessimistic-locking"},"Pessimistic Locking"),(0,i.kt)("p",null,"MikroORM supports Pessimistic Locking at the database level. Every Entity can be part of a pessimistic lock, there is no special metadata required to use this feature. Pessimistic Locking requires active transaction, so you will have to use explicit transaction demarcation."),(0,i.kt)("p",null,"MikroORM currently supports two pessimistic lock modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pessimistic Write (",(0,i.kt)("inlineCode",{parentName:"li"},"LockMode.PESSIMISTIC_WRITE"),"), locks the underlying database rows for concurrent Read and Write Operations."),(0,i.kt)("li",{parentName:"ul"},"Pessimistic Read (",(0,i.kt)("inlineCode",{parentName:"li"},"LockMode.PESSIMISTIC_READ"),"), locks other concurrent requests that attempt to update or lock rows in write mode.")),(0,i.kt)("p",null,"You can use pessimistic locks in three different scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"em.findOne(className, id, { lockMode  })")),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"em.lock(entity, lockMode)")),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryBuilder.setLockMode(lockMode)"))),(0,i.kt)("p",null,"This is how it looks like in action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await em.transactional(async _em => {\n  await _em.findOne(Author, id, { lockMode: LockMode.PESSIMISTIC_WRITE });\n});\n\n// START TRANSACTION\n// SELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` = ? FOR UPDATE\n// COMMIT\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.findOne(Author, id);\n// ...\nawait orm.em.transactional(async em => {\n  await em.lock(author, LockMode.PESSIMISTIC_READ);\n});\n\n// SELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` = ?\n// START TRANSACTION\n// SELECT 1 FROM `author` AS `e0` WHERE `e0`.`id` = ? LOCK IN SHARE MODE\n// COMMIT\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Like ",(0,i.kt)("a",{parentName:"p",href:"https://b4nan.github.io/mikro-orm/"},"MikroORM"),"? \u2b50\ufe0f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},"Star it")," on GitHub and share this article with your friends.")))}m.isMDXComponent=!0}}]);