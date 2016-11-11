import * as DOM from "../../core/util/dom";

interface TabsProps {
  tabs: Array<{ id: string; title: string; }>;
  active: string; // id
}

export default (props: TabsProps): HTMLElement => {
  const active = (tab: {id: string}) => tab.id === props.active ? "bk-bs-active" : null;
  return (
    <fragment>
      <ul class="bk-bs-nav bk-bs-nav-tabs">{
        props.tabs.map(tab =>
          <li class={active(tab)}>
            <a href={`#tab-${tab.id}`}>{tab.title}></a>
          </li>)
      }</ul>
      <div class="bk-bs-tab-content">{
        props.tabs.map(tab => <div class={["bk-bs-tab-pane", active(tab)]} id={`tab-${tab.id}`}></div>)
      }</div>
    </fragment>
  )
}