import { shallowMount } from '@vue/test-utils';
import QuestionsGroup from './QuestionsGroup';

describe('QuestionsGroup', () => {
  it('should display items', async () => {
    const items = [
      {
        checked: {
          checked: false,
          title: '',
        },
      },
    ];
    const wrapper = shallowMount(QuestionsGroup, {
      propsData: {
        items,
      },
    });

    await wrapper.vm.$nextTick();
    const group = wrapper.findComponent({ name: 'QuestionsGroup' });

    expect(group.props('items')).toEqual(items);
  });
  it('should display title', async () => {
    const title = 'title';
    const wrapper = shallowMount(QuestionsGroup, {
      propsData: {
        title,
      },
    });

    await wrapper.vm.$nextTick();
    const group = wrapper.findComponent({ name: 'QuestionsGroup' });

    expect(group.props('title')).toEqual(title);
  });
  it('should display currentPage', async () => {
    const currentPage = 1;
    const wrapper = shallowMount(QuestionsGroup, {
      propsData: {
        currentPage,
      },
    });

    await wrapper.vm.$nextTick();
    const group = wrapper.findComponent({ name: 'QuestionsGroup' });

    expect(group.props('currentPage')).toEqual(currentPage);
  });
  it('should display groupLength', async () => {
    const groupLength = 3;
    const wrapper = shallowMount(QuestionsGroup, {
      propsData: {
        groupLength,
      },
    });

    await wrapper.vm.$nextTick();
    const group = wrapper.findComponent({ name: 'QuestionsGroup' });

    expect(group.props('groupLength')).toEqual(groupLength);
  });
  it('should show next page', async () => {
    const page = 2;
    const wrapper = shallowMount(QuestionsGroup, {
      propsData: {
        items: [],
      },
    });

    wrapper.setData({ page: 3 });
    await wrapper.vm.nextQuestion(page);
    expect(wrapper.vm.page).toEqual(4);
  });
  it('should show prev page', async () => {
    const page = 2;
    const wrapper = shallowMount(QuestionsGroup);

    wrapper.setData({ page: 3 });
    await wrapper.vm.prevQuestion(page);
    expect(wrapper.vm.page).toEqual(2);
  });
});
