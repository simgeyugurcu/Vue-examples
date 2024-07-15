const app = Vue.createApp({
    data() {
        const storedTasks = localStorage.getItem('tasks');           // LocalStorage'dan kaydedilmiş görevleri alır veya boş bir dizi oluşturur
        const tasks = storedTasks ? JSON.parse(storedTasks) : [];
        const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;            // Sonraki görevin ID'sini belirler

        return {
            newTask: {
                title: '',
                description: ''
            },
            tasks: tasks,
            filter: 'all',
            sortOrder: null,
            showSortOptions: false,
            sortLabel: 'Sort by Date', 
            sortedBy: null 
        };
    },
    computed: {
        filteredTasks() {
            let filtered = this.tasks.filter(task => {
                if (this.filter === 'all') {
                    return true;
                } else if (this.filter === 'active') {
                    return !task.completed;
                } else if (this.filter === 'completed') {
                    return task.completed;
                }
            });
            // Sıralama düzenine göre filtrelenmiş görevleri sıralar
            if (this.sortOrder === 'desc') {
                return filtered.sort((a, b) => a.id - b.id);
            } else if (this.sortOrder === 'asc') {
                return filtered.sort((a, b) => b.id - a.id);
            } else {
                return filtered;
            }
        },
        sortOrderLabel() {
            if (this.sortOrder === 'asc') {
                return 'New to Old';
            } else if (this.sortOrder === 'desc') {
                return 'Old to New';
            } else {
                return 'None';
            }
        }
    },
    methods: {
        addTask() {
            if (this.newTask.title.trim() === '') return;

            const newTask = {                     // Yeni görevin ID'sini belirler
                id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
                title: this.newTask.title.trim(),
                description: this.newTask.description.trim(),
                completed: false,
                editing: false
            };
            // Görev listesine yeni görevi ekler
            this.tasks.push(newTask);
            this.newTask.title = '';
            this.newTask.description = '';
            this.saveTasks();
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveTasks();
        },
        editTask(task) {
            task.editing = !task.editing;
            if (!task.editing) {
                this.saveTasks();
            }
        },
        setSortOrder(order) {
            this.sortOrder = order;
            this.showSortOptions = false;
            this.sortLabel = 'Sort by Date';
        },
        saveTasks() {                 // Görevleri LocalStorage'a kaydeder
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
});

app.mount('#app');
