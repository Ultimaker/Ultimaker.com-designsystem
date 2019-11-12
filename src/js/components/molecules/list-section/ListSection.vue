<template>
    <section class="list-section">
        <template v-if="title">
            <header class="list-section__header">
                <h3 class="list-section__title">{{ title }}
                    <span class="list-section__count">({{cards.length}})</span>
                    <template v-if="tooltip">
                        <transition name="tooltip">
                            <tooltip class="section-tooltip" block="list-section" v-show="visibleTooltip"
                                     v-bind="tooltip" :id="`tooltip_${ uniqId }`">
                                {{ tooltip.description }}
                            </tooltip>
                        </transition>
                    </template>
                </h3>
                <template v-if="tooltip">
                    <action-button
                        class="link list-section__info-link"
                        :icon="tooltip.icon"
                        mod="reversed"
                        @click.native.prevent="toggleTooltip"
                        @blur.native.prevent="hideTooltip"
                        role="button"
                        :aria-describedby="`tooltip_${ uniqId }`"
                        v-if="tooltip">
                        {{ tooltip.label }}
                    </action-button>
                </template>
            </header>
        </template>

        <template v-for="filterCategory in filterCategories()">
            <section class="filter-category">
                <h4 class="filter-category__title">{{ filterCategory.title }}</h4>
                <form>
                    <input
                        class="filter-category__reset"
                        :class="!isAnyLabelSelected(filterCategory.labels) ? 'filter-category__reset--active' : ''"
                        type="reset"
                        :value="filterCategory.showAllLabel"
                        @click="removeCategoryLabels(filterCategory.labels)"
                    />
                    <ul class="filter-category__list">
                        <li
                            class="filter-category__list-item"
                            v-for="(label, key) in filterCategory.labels"
                            :key="key"
                        >
                            <label class="label-filter">
                                <input
                                    :name="label"
                                    ref="checkbox"
                                    type="checkbox"
                                    :checked="valueFilter.activeFilters().includes(label)"
                                    :disabled="!valueFilter.possibleFilters().includes(label)"
                                    @click="toggleFilterLabel(label)"
                                />
                                <span class="label-filter__label">{{ label }}</span>
                            </label>
                        </li>
                    </ul>
                </form>
            </section>
        </template>

        <ul class="list-section__container">
            <li v-for="(chunk, index) in chunks"
                :key="index" class="list-section__row"
                :class="chunk.length % 2 === 0 && 'list-section__row--even'"
                v-show="index < visibleChunks">
                <component v-if="chunk && chunk.length"
                           class="list-section__item"
                           :is="card.type"
                           :key="i"
                           v-bind="card"
                           v-for="(card, i) in chunk"/>
            </li>
        </ul>

        <footer class="list-section__footer">
            <button @click="limit && limit.expandAmount ? showChunk() : showAll()"
                    v-show="showButton()"
                    class="button--secondary list-section__footer__button">
                {{ showLabel() }}
            </button>
        </footer>
    </section>
</template>

<script src="./list-section.ts" lang="ts" />
