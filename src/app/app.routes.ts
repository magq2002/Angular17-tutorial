import { Routes } from '@angular/router';
import { UserComponent} from './components/user/user.component';
import { CommentsComponent} from './components/comments/comments.component';
import { BlogPostComponent} from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [{path:'blog-post', title:'Blog', component:BlogPostComponent},{path:'contact', title:'Contact', component: ContactComponent }];
