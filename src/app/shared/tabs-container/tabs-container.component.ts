import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.scss'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList<TabComponent>();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active)

    if(activeTabs.length === 0){
      this.selectTab(this.tabs.first)
    }
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false
    })

    selectedTab.active = true

    // This will act like calling event.preventDefault()
    // for the anchor tags that will call it
    return false
  }

}
