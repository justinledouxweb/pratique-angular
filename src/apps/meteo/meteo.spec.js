// describe('Dashboard', () => {
//   let $componentController;
//   let component;
//   let scope;

//   beforeEach(() => {
//     angular.mock.module(($provide) => {
//       $provide.constant('APP_SETTINGS', {
//         baseUrl: '/gouvernementales',
//         shibbolethUid: '01263935',
//         protocol: 'https',
//         host: 'dev-api-pistard.banq.qc.ca/pistard/service',
//         port: 3000,
//         apiLogoutUrl: 'https://acpt-www.banq.qc.ca/idp/logout_banq.jsp',
//         apiLoginUrl: 'https://dev-pistard.banq.qc.ca'
//       });
//     });

//     angular.mock.module('app-dashboard', ($provide) => {
//       $provide.constant('USER', {
//         centreArchive: {
//           adresse: 'Campus de l\'Université Laval, C.P. 10450 succ. Sainte-Foy',
//           code: '03Q',
//           codePostal: 'G1V 4N1',
//           indActif: true,
//           nom: 'BAnQ Québec',
//           telecopieur: '418-646-0868',
//           telephone: '418-644-4800',
//           typeCentre: 'BANQ',
//           ville: 'Québec',
//         },
//         codeUsager: '01263634',
//         courriel: 'mf.mignault@banq.qc.ca',
//         idOrganisme: 30888,
//         indExterne: true,
//         nom: 'Daigle',
//         prenom: 'Marceline',
//         roles: [
//           'ARCHIVISTE_ORGANISME',
//         ],
//       });
//     });

//     angular.mock.inject(($rootScope, _$componentController_, $injector) => {
//       scope = $rootScope.$new();
//       $componentController = _$componentController_;
//       component = $componentController('appDashboard', { $scope: scope });
//     })
//   });

//   it('should be defined', () => {
//     expect(component).not.toBe(null);
//   });
// });
