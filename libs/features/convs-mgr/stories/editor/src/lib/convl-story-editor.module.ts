import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FlexLayoutModule,
  MaterialBricksModule,
  MaterialDesignModule,
  MaterialFormBricksModule,
} from '@iote/bricks-angular';
import { MultiLangModule } from '@ngfi/multi-lang';

import { StoryEditorStateModule } from '@app/state/convs-mgr/story-editor';

import { ConvlPageModule } from '@app/elements/layout/page-convl';

import { BlocksLibraryModule } from '@app/features/convs-mgr/stories/blocks/library/main';
import { ConvsMgrAnchorBlockModule } from '@app/features/convs-mgr/stories/blocks/library/anchor-block';

import { StoryEditorFrameComponent } from './components/editor-frame/editor-frame.component';
import { BlocksLibraryComponent } from './components/blocks-library/blocks-library.component';

import { StoryEditorPageComponent } from './pages/story-editor/story-editor.page';

import { StoryEditorInitialiserService } from './providers/story-editor-initialiser.service';
import { ManageChannelStoryLinkService } from './providers/manage-channel-story-link.service';

import { AddBotToChannelModal } from './modals/add-bot-to-channel-modal/add-bot-to-channel.modal';

import { ConvlStoryEditorRouterModule } from './convs-story-editor.router.module';
import { CommonModule } from '@angular/common';
import { EditBlockDetailsModalComponent } from './modals/edit-block-details-modal/edit-block-details-modal.component';
import { BlockModalToggleService } from './providers/block-modal-toggle.service';

@NgModule({
  declarations: [
    StoryEditorPageComponent,
    AddBotToChannelModal,
    StoryEditorFrameComponent,
    BlocksLibraryComponent,
    EditBlockDetailsModalComponent,
  ],
  providers: [
    StoryEditorInitialiserService,
    ManageChannelStoryLinkService,
    BlockModalToggleService,
  ],
  imports: [
    CommonModule,
    MultiLangModule,
    MaterialDesignModule,
    FlexLayoutModule,
    MaterialBricksModule,
    MaterialFormBricksModule,
    FormsModule,
    ReactiveFormsModule,
    ConvlPageModule,
    ConvsMgrAnchorBlockModule,
    BlocksLibraryModule,
    StoryEditorStateModule,
    ConvlStoryEditorRouterModule,
  ],
})
export class ConvlStoryEditorModule {}
