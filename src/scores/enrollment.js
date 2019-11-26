export default {
  errors: '',
  main_data: {
    email: 'franco.cabanas@gmail.com',
    status: 'tests_completed',
    es_status: 'Pruebas completadas',
    last_name: 'Cabañas',
    first_name: 'Franco',
    main_score: 95,
    process_id: 18,
    profile_id: 29,
    count_total: 1,
    process_name: '[2019111022]-Probando Ponderaciones Filtros',
    profile_name: 'HOLA MUNDO',
    enrollment_id: 40,
    count_rendered: 1,
    invitation_opened_at: '26/11/19 12:27'
  },
  cognitive_data: {
    main: {
      title: 'Habilidades Cognitivas',
      count_total: 1,
      description:
        'Las habilidades básicas que el cerebro usa en conjunto para tomar la información entrante y procesarla',
      count_rendered: 1,
      cognitive_score: 95
    },
    scores: [
      {
        id: 'divided_attention',
        score: 81,
        en_name: 'Divided attention',
        es_name: 'Atención dividida',
        en_tooltip:
          "In this test the person's ability to progressively perform more tasks and their level of effectiveness is evaluated",
        es_tooltip:
          'En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad',
        en_low_level: 'Monofunctional',
        es_low_level: 'Monofuncional',
        en_high_level: 'Polyfunctional',
        es_high_level: 'Polifuncional',
        optimal_score: 86,
        en_description: 'Handling simultaneous tasks',
        es_description: 'Manejo de tareas simultáneas',
        profiled_score: 95
      }
    ]
  },
  personality_data: {
    main: {
      title: 'Rasgos de Personalidad',
      count_total: 0,
      description:
        'Refleja los patrones característicos de pensamientos, sentimientos y comportamientos de las personas. Los rasgos de personalidad implican consistencia y estabilidad',
      count_rendered: 0,
      personality_score: 0
    },
    scores: []
  }
}
