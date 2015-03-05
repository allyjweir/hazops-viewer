'use strict';

/**
 * @ngdoc function
 * @name hazopsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hazopsApp
 */
angular.module('hazopsApp')
  .controller('MainCtrl', function () {

    var vm = this;
    vm.hazops = [
        {
            id: '1',
            guideWord: 'NO',
            parameter: 'Vision',
            element: 'LADAR Array (Roof Mounted)',
            deviation: 'No data able to be captured',
            possibleCauses:[
                'Failure from wear',
                'Debris thrown from ground'
            ],
            consequences: [
                'Cannot scan area',
                'Damage to laser array',
                'Garbage data returned to system'
            ],
            safeguards: [
                {
                    title: 'Reactive',
                    list: [
                        'Alert passengers to failure',
                        'Bring vehicle to a safe stop using most recent data',
                        'Enable hazard lights to warn others',
                        'Recognise loss of valid data'
                    ]
                },
                {
                    title: 'Preventative',
                    list: [
                        'Require regular maintainance of LIDAR Array',
                        'Limit lifetime of LIDAR array (based on miles driven/hours driven)',
                        'Secondary live redundancy LIDAR system in place'
                    ]
                }
            ],
            comments: 'It would be difficult to quantify how long these devices would work out in the real world. Whereas with timing belts and other devices we can more accurately tell when they will fail based on their materials, LIDAR modules are much more complex',
            actions: {
                required: ['Stress test LIDAR elements used in vehicle over extended period'],
                assigned: 'Engineers'
            }
        },
        {
            id: '2',
            guideWord: 'LESS',
            parameter: 'Vision',
            element: 'LADAR Array (Roof Mounted)',
            deviation: 'Some lasers stop capturing data',
            possibleCauses:[
                'Component failure'
            ],
            consequences: [
                'Reduced fidelity of data recieved',
                'Corruption of data',
                'Complete failure of data capture',
                'Skewed results'
            ],
            safeguards: [
                {
                    title: 'Reactive',
                    list: [
                        'Monitor the output of all 64 lasers for failure',
                        'Be able to recognise less accurate data and adapt driving style'
                    ]
                }
            ],
            comments: 'This would be dependent on how the device would handle partial failure. Making the assumption that it will keep working but with reduced service',
            actions: {
                required: [
                    'Test the partial failure to see how the system reacts'
                    ],
                assigned: 'Engineers'
            }
        },
        {
            id: '3',
            guideWord: 'LESS',
            parameter: 'Vision',
            element: 'LADAR Array (Roof Mounted)',
            deviation: 'Viewport obstructed by environmental debris',
            possibleCauses:[
                'Debris being thrown up from road by other cars or wind',
                'Snowfall covering LIDAR array',
                'Mud/Dirt splashed over the vehicle',
                'Malicious attack on car. Pouring of paint or other material in attempt to disrupt AV'
            ],
            consequences: [
                'Failure to scan the surrounding area',
                'Failure to reliably detect hazards',
                'LIDAR array may jam and stop spinning causing element damage'
            ],
            safeguards: [
                {
                    title: 'Reactive',
                    list: [
                        'Install wipers that can clean the array\'s viewfinder. These would have to be capable of handling the high RPM of specified LIDAR Array',
                        'Non-LIDAR based detection system as active redundency',
                        'Alert passenger to any failure or interruption of detection',
                        'In extreme cases, bring the vehicle to a safe halt'
                    ]
                },
                {
                    title: 'Preventative',
                    list:[
                        'Design the LIDAR array to be more flush than current concepts so that it is less of an obvious point of weakness (for malicious attacks)',
                        'Restruct weather conditions that AV can operate within (Unfavourable)'
                    ]
                }
            ],
            comments: 'This is a big challenge as it has many possible causes that are common in driving. The possibility of third party hazards also introduce a lot of challenge in creating a reliable and safe system',
            actions: {
                required: [
                    'Research alternative detection solutions',
                    'Research feasability of multiple LIDAR arrays'
                    ],
                assigned: 'Designers would be needed to research a wiper implementation and Engineers to look into non-sight driven detection systems.'
            }
        },
        {
            id: '4',
            guideWord: 'MORE',
            parameter: 'Power',
            element: 'LADAR Array (Roof Mounted)',
            deviation: 'Increase of power directed to element',
            possibleCauses:[
                'Surge in electricity flow',
                'Lightning strike on vehicle',
                'Discharge from electrical line that hits/touches the vehicle',
                'Static discharge from passenger',
                'Static discharge from object or nearby item',
                'Hit with Taser shock device'
            ],
            consequences: [
                'Distortion of data being captured',
                'Increased rotation speed of element',
                'Causes skip in CPU of element that causes it to crash'
            ],
            safeguards: [
                {
                    title: 'Reactive',
                    list: [
                        'Monitor the electricity flow throughout AV electrical system',
                        'Be able to discharge excess energy in some way',
                        'Grounding',
                        'Warn system if spikes detected',
                        'Secondary system to check calculation (different design) that can see if system distorted from electical fluctuations'
                    ]
                },
                {
                    title: 'Preventative',
                    list:[
                        'Surge protection installed'
                    ]
                }
            ],
            comments: 'This is a concernt that could affect every component used within an AV. Especially with the implementation of all-electric AV, energy management is a key concern.',
            actions: {
                required: [
                    'Test equipment at its boundaries and exceptional cases to see how existing system reacts to extra electricity',
                    'Implement safeguards suggested'
                    ],
                assigned: 'Engineers'
            }
        },
    ];

//Adapt to use in the HAZOP table
    vm.orders = [
    {
        id: 1,
        title: 'ID # - Ascending',
        key: 'id',
        reverse: false
    },
    {
        id: 2,
        title: 'ID # - Descending',
        key: 'id',
        reverse: true
    },
    {
        id: 3,
        title: 'Guideword - Ascending',
        key: 'guideWord',
        reverse: false
    },
    {
        id: 4,
        title: 'Guideword - Decending',
        key: 'guideWord',
        reverse: true
    },
    {
        id: 5,
        title: 'Parameter - Ascending',
        key: 'parameter',
        reverse: false
    },
    {
        id: 6,
        title: 'Parameter - Descending',
        key: 'parameter',
        reverse: true
    }
];
vm.order = vm.orders[0];
vm.new = {};
vm.addHazop = function() {
    vm.hazops.push(vm.new);
    vm.new = {};
};

vm.shows = [
      {
          title: 'Game of Thrones',
          year: 2011,
          favorite: true
      },
      {
          title: 'Walking Dead',
          year: 2010,
          favorite: false
      },
      {
          title: 'Firefly',
          year: 2002,
          favorite: true
      },
      {
          title: 'Banshee',
          year: 2013,
          favorite: true
      },
      {
          title: 'Greys Anatomy',
          year: 2005,
          favorite: false
      }
  ];
  vm.new = {};
  vm.addShow = function() {
      vm.hazops.push(vm.new);
      vm.new = {};
  };
  });
