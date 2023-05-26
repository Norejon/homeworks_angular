import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {PostDetailsPageComponent} from "./pages/post-details-page/post-details-page.component";

const routes: Routes = [
  {path:"",component:PostPageComponent,children:[
      {path:":id",component:PostDetailsPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
